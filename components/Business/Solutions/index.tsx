import Link from 'next/link'
import React from 'react'
import BusinessPageTitle from '../BusinessPageTitle'
import { GridElements } from '../data'
import { BusinessPageWraper, LearnMoreLink } from '../style'
import { GridContainer, GridItems, ItemImage, ItemInfo, ItemInfoText, ItemInfoTitle, LearnMore, SolutionsWraper } from './style'

type Props = {}

const Solutions = (props: Props) => {
  return (
    <SolutionsWraper>
        <BusinessPageWraper>
            <BusinessPageTitle title="Find the right solutions for your business"/>
            <GridContainer>
                {GridElements.map((el, i) =>(
                    <GridItems key={i}>
                        <ItemImage width={80} height={80} src={el.img} alt="img"/>
                        <ItemInfo>
                            <ItemInfoTitle>{el.title}</ItemInfoTitle>
                            <ItemInfoText>{el.text}</ItemInfoText>
                            <Link href='/'>
                               <LearnMore>Learn More</LearnMore>
                            </Link>
                        </ItemInfo>
                    </GridItems>
                ))}
            </GridContainer>
        </BusinessPageWraper>
    </SolutionsWraper>
  )
}

export default Solutions