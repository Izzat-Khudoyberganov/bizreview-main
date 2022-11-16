import React, { FC } from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../utils/translations"
import Container from "../../Layout/Container"
import Title from "../Title"
import Cards from "./Cards"
import img from "../../img/user.webp"
import {
  CustomersBlock,
  CustomersWraper,
  WrapperBlockOne,
  WrapperBlockTwo,
  WrapperLink,
} from "./style"

export const Customers: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  const comment:string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, optio eius facilis quis totam ut! Ad, necessitatibus. Pariatur, dolorum debitis.'
  const author: string = "John Smith"
  const location: string = "California"
  return (
    <CustomersWraper>
      <Container>
        <CustomersBlock>
          <WrapperBlockOne>
            <Title title={t.customers} />
            <Cards
              image={img}
              comment={comment}
              author={author}
              location={location}
            />
            <Cards
              image={img}
              comment={comment}
              author={author}
              location={location}
            />
          </WrapperBlockOne>
          <WrapperBlockTwo>
          <Cards
              image={img}
              comment={comment}
              author={author}
              location={location}
            />
            <Cards
              image={img}
              comment={comment}
              author={author}
              location={location}
            />
            <WrapperLink>{t.reviews}</WrapperLink>
          </WrapperBlockTwo>
        </CustomersBlock>
      </Container>
    </CustomersWraper>
  )
}
