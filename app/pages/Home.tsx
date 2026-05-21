import { Head, type PageComponent } from '@ts-76/inertia-hono-jsx'
import Layout from './Layout'

const Home: PageComponent<'Home'> = ({ message }) => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>{message}</h1>
    </Layout>
  )
}

export default Home
