import { createInertiaApp } from '@ts-76/inertia-hono-jsx'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`] as never
  }
})
