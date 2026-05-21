import { Link } from '@ts-76/inertia-hono-jsx'
import type { Child } from 'hono/jsx'

export default function Layout({ children }: { children?: Child }) {
  return (
    <div class="app">
      <header>
        <nav>
          <Link href="/">Home</Link>
          {' | '}
          <Link href="/users">Users</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
