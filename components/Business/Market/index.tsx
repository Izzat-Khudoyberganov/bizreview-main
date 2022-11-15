import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BusinessPageTitle from '../BusinessPageTitle'
import { MarketData } from '../data'
import { LearnMoreLink, MainWraper } from '../style'
import { MarketWraper, ProImage, ProTitle, ProWraper, ProWraperItems } from './style'

type Props = {}

const Market = (props: Props) => {
  return (
    <MainWraper>
        <MarketWraper>
            <BusinessPageTitle title="Learn how to market your business on Yelp like a pro"/>
            <ProWraper>
                {MarketData.map((el, i) => (
                    <ProWraperItems key={i}>
                        <ProImage src={el.img} alt="img" />
                        <ProTitle>{el.title}</ProTitle>
                        <Link href="/">
                            <LearnMoreLink>Read article</LearnMoreLink>
                        </Link>
                    </ProWraperItems>
                ))}
            </ProWraper>
        </MarketWraper>
    </MainWraper>
  )
}

export default Market