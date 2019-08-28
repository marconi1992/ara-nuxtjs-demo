# Implementing Microfrontends in Nuxt.js using Svelte and Ara Framework

## Nuxt application

Install dependencies for Nuxt application `nuxt-site`.

```shell
yarn install
```

Run Nuxt application on http://localhost:8000.

```shell
PORT=8000 yarn dev
```

## Nova service

Install dependencies for Nova service `nova`.

```shell
yarn install
```

Run Nova service on http://localhost:3000

```shell
yarn dev
```

## Nova Proxy

Install [Ara CLI](https://github.com/ara-framework/ara-cli)

```shell
npm install -g ara-cli
```


Run Nova Proxy on http://localhost:8080.

```shell
HYPERNOVA_BATCH=http://localhost:3000/batch ara run:proxy
```