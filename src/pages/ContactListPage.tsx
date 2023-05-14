import { FC, memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useGetContactsQuery } from 'src/ducks/contacts'
import { useGetGroupContactsQuery } from 'src/ducks/groupContacts'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage: FC = memo(() => {
  const { data: contacts, isLoading } = useGetContactsQuery()
  const { data: groupContacts } = useGetGroupContactsQuery()

  const [findContactsList, setFindContactsList] = useState<ContactDto[]>()

  useEffect(() => {
    setFindContactsList(contacts)
  }, [isLoading, contacts])

  if (contacts === undefined || groupContacts === undefined || findContactsList === undefined) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  }

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1)
    }

    if (fv.groupId) {
      const groupContactsList = groupContacts.find(({ id }) => id === fv.groupId)

      if (groupContactsList) {
        findContacts = findContacts.filter(({ id }) => groupContactsList.contactIds.includes(id))
      }
    }

    setFindContactsList(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm groupContactsList={groupContacts} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className='g-4'>
          {findContactsList.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
