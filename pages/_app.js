import { Provider } from '@contra-ui/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
