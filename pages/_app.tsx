import type { AppProps } from "next/app"
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
      </Layout>
    </>
  )
}

export default MyApp
