import type { AppProps } from "next/app"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Layout } from "../Layout"
import { GlobalStyles } from "../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </Layout>
    </>
  )
}

export default MyApp
