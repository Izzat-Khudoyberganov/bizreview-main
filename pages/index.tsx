import type { NextPage } from "next"
import Head from "next/head"
import { Banner } from "../components/Banner"
import { BusinessOwners } from "../components/BusinessOwners"
import { Customers } from "../components/Customers"
import { Footer } from "../components/Footer"
import MobileNavbar from "../components/Header/MobileNavbar"
import Offers from "../components/Offers"
import { PopularBusiness } from "../components/PopularBusiness"
import PopularServices from "../components/PopularServices"
import SearchPanel from "../components/SearchPanel"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bizreview</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Banner />
      <MobileNavbar />
      <SearchPanel />
      <PopularServices />
      <BusinessOwners />
      {/* <Offers />
      <PopularBusiness />
      <Customers />
      <Footer /> */}
    </>
  )
}
export default Home
