import { FC, memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroupContactsQuery } from 'src/ducks/groupContacts'

export const GroupListPage: FC = memo(() => {
  const { data: groupContacts } = useGetGroupContactsQuery()

  if (groupContacts === undefined) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  }

  return (
    <Row xxl={4}>
      {groupContacts.map((groupContact) => (
        <Col key={groupContact.id} style={{ margin: '1rem 0' }}>
          <GroupContactsCard groupContact={groupContact} withLink />
        </Col>
      ))}
    </Row>
  )
})
