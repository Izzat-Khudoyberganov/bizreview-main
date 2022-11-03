import React, { FC, useEffect, useState, useRef } from "react"
import { Swiper } from "swiper/react"
import { FreeMode, Pagination, Navigation } from "swiper"
import Image from "next/image"
import Container from "../../Layout/Container"
import { useRouter } from "next/router"
import { en, ru } from "../../utils/translations"
import { SwiperItems } from "./data"
import Title from "../Title"
import {
  ButtonNext,
  ButtonPrev,
  ServiceWraper,
  SwiperCards,
  SwiperNavigation,
} from "./style"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

const PopularServices: FC = () => {
  const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
    const [wrapper, setWrapper] = useState<T | null>(null)
    const ref = useRef<T>(null)

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current)
      }
    }, [])

    return [wrapper, ref]
  }

  let router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()
  return (
    <>
      <Container>
        <ServiceWraper>
          <Title title={t.popularServiceTitle} />
          <SwiperNavigation>
            <ButtonPrev ref={prevElRef}>Prev</ButtonPrev>
            <ButtonNext ref={nextElRef}>Next</ButtonNext>
          </SwiperNavigation>
        </ServiceWraper>
      </Container>
      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        slidesPerView={8}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          prevEl,
          nextEl,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        className='mySwiper'
        style={{ marginTop: 50, padding: "0 30px" }}
      >
        {SwiperItems.map((el) => (
          <SwiperCards key={el.id}>
            <Image
              src={el.img}
              alt={el.title}
              width={100}
              layout='intrinsic'
              height={100}
            />
            <h4>{el.title}</h4>
            <p>{el.subtitle}</p>
          </SwiperCards>
        ))}
      </Swiper>
    </>
  )
}
export default PopularServices
