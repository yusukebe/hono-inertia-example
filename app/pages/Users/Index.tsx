import { Head, Link, type PageComponent } from '@ts-76/inertia-hono-jsx'
import Layout from '../Layout'

const UsersIndex: PageComponent<'Users/Index'> = ({ users }) => {
  return (
    <Layout>
      <Head title="Users" />
      <h1>Users</h1>
      <p>
        <Link href="/users/new">+ New user</Link>
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link> &lt;{user.email}&gt;
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default UsersIndex
