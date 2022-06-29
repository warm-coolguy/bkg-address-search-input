import { createApp } from 'vue'
import BkgAddressSearchInput from './BkgAddressSearchInput.vue'

export default function createBkgAddressSearchInput ({
  divId,
  ...props
}) {
  const app = createApp(
    BkgAddressSearchInput,
    props
  )
  app.mount(`#${divId}`)
}
