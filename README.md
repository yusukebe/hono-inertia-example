# hono-inertia-example

[Hono](https://hono.dev) + [Inertia.js](https://inertiajs.com) (`hono/jsx` via [`@ts-76/inertia-hono-jsx`](https://github.com/ts-76/inertia-hono-jsx)) on Cloudflare Workers.

## Pages

- `/` — Home
- `/users` — Users list
- `/users/:id` — User detail
- `/users/new` — Create user (with `@hono/zod-validator`)

## Develop

```sh
bun install
bun run dev
```

## Build & deploy

```sh
bun run build
bun run deploy
```
