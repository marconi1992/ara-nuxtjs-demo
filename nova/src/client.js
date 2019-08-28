import { renderInPlaceholder } from 'hypernova-svelte'

import Example from './components/Example.svelte'

const { document } = global

document.addEventListener('NovaMount', (event) => {
  const { detail: { name, id } } = event
  if (name === 'Example') {
    return renderInPlaceholder(name, Example, id)
  }
})
