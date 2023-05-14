import { FC, memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useGetContactsQuery } from 'src/ducks/contacts'

export const FavoritListPage: FC = memo(() => {
  const { data: contacts } = useGetContactsQuery()

  if (contacts === undefined) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  }

  const favoriteContacts = contacts.filter((contact) => contact.favorite)

  return (
    <Row xxl={4} className='g-4'>
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
