import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useGetGroupContactsQuery } from 'src/ducks/groupContacts'
import { useGetContactsQuery } from 'src/ducks/contacts'

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>()
  const { data: groupContacts } = useGetGroupContactsQuery()
  const { data: contacts } = useGetContactsQuery()

  const groupContact = groupContacts?.find((c) => c.id === groupId)

  return (
    <Row className='g-4'>
      {groupContact ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContact={groupContact} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className='g-4'>
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
