import '../styles/globals.css'
import LandingPage from '../container/LandingPage'

function MyApp({ Component, pageProps }) {
  return (
    <LandingPage>
      <Component {...pageProps} />
    </LandingPage>
  )

}

export default MyApp
