import { Head, Link, useForm, type PageComponent } from '@ts-76/inertia-hono-jsx'
import Layout from '../Layout'

const UsersNew: PageComponent<'Users/New'> = ({ values, errors }) => {
  const form = useForm('post', '/users', {
    name: values?.name ?? '',
    email: values?.email ?? '',
    bio: values?.bio ?? ''
  })

  const fieldErrors = errors

  return (
    <Layout>
      <Head title="New user" />
      <p>
        <Link href="/users">← Back to users</Link>
      </p>
      <h1>New user</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.submit()
        }}
      >
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.data.name}
            onInput={(e) => form.setData('name', (e.target as HTMLInputElement).value)}
          />
          {fieldErrors.name && <p class="error">{fieldErrors.name}</p>}
        </div>
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.data.email}
            onInput={(e) => form.setData('email', (e.target as HTMLInputElement).value)}
          />
          {fieldErrors.email && <p class="error">{fieldErrors.email}</p>}
        </div>
        <div>
          <label for="bio">Bio</label>
          <textarea
            id="bio"
            value={form.data.bio}
            onInput={(e) => form.setData('bio', (e.target as HTMLTextAreaElement).value)}
          />
          {fieldErrors.bio && <p class="error">{fieldErrors.bio}</p>}
        </div>
        <button type="submit" disabled={form.processing}>
          Create
        </button>
      </form>
    </Layout>
  )
}

export default UsersNew
