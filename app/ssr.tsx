import { createInertiaApp } from '@ts-76/inertia-hono-jsx'
import { renderToString } from 'hono/jsx/dom/server'
import type { PageObject } from '@hono/inertia'
import type { Page } from '@inertiajs/core'

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })

export const renderPage = (page: PageObject) =>
  createInertiaApp({
    page: page as Page,
    render: renderToString,
    resolve: (name) => pages[`./pages/${name}.tsx`] as never
  })
