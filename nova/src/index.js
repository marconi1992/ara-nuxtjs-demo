import hypernova from 'hypernova/server'
import { renderSvelte } from 'hypernova-svelte'
import express from 'express'
import path from 'path'

import Example from './components/Example.svelte'

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent (name) {
    if (name === 'Example') {
      return renderSvelte(name, Example)
    }

    return null
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
