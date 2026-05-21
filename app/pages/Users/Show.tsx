import { Head, Link, type PageComponent } from '@ts-76/inertia-hono-jsx'
import Layout from '../Layout'

const UsersShow: PageComponent<'Users/Show'> = ({ user }) => {
  return (
    <Layout>
      <Head title={user.name} />
      <p>
        <Link href="/users">← Back to users</Link>
      </p>
      <h1>{user.name}</h1>
      <dl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Bio</dt>
        <dd>{user.bio}</dd>
      </dl>
    </Layout>
  )
}

export default UsersShow
