import type { AppProps } from "next/app"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {MobileNavbar} from "../components/Header/MobileNavbar"
import { Layout } from "../Layout"
import { GlobalStyles } from "../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <MobileNavbar/>
        <Component {...pageProps} />
        <Footer/>
      </Layout>
    </>
  )
}

export default MyApp
