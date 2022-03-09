import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Nav } from '../components/sections/Nav/Nav'
import { Footer } from 'components/sections/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav/>
        <main>
          <Component {...pageProps} />
        </main>
      <Footer/>
    </>
  )
}

export default MyApp
