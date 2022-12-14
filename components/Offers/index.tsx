import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { StaticImageData } from "next/image";
import { en, ru } from "../../utils/translations";
import { ButtonNext, ButtonPrev, SwiperNavigation } from "./style";
import { slides } from "./data";
import Title from "../Title";
import {
  Content,
  OffersWraper,
  OffersContainer,
  SwiperItemCards,
  SwiperSubtitle,
  SwiperTitle,
  SwiperText,
} from "./style";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Offers: FC = () => {
  const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
    const [wrapper, setWrapper] = useState<T | null>(null);
    const ref = useRef<T>(null);

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current);
      }
    }, []);

    return [wrapper, ref];
  };
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ru;

  return (
    <OffersWraper>
      <OffersContainer>
        <Content>
          <Title title={t.hotOffers} />
          <SwiperNavigation>
            <ButtonPrev ref={prevElRef}>Prev</ButtonPrev>
            <ButtonNext ref={nextElRef}>
              Next
            </ButtonNext>
          </SwiperNavigation>
        </Content>
        <Swiper
          modules={[FreeMode, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
          style={{
            marginTop: 50,
          }}
        >
          {slides.map(
            (el: {
              subtitle: string;
              title: string;
              id: number;
              text: string;
              img: StaticImageData;
            }) => (
              <SwiperItemCards key={el.id} image={el.img}>
                <SwiperSubtitle>{el.subtitle}</SwiperSubtitle>
                <SwiperTitle>{el.title}</SwiperTitle>
                <SwiperText>{el.text}</SwiperText>
              </SwiperItemCards>
            )
          )}
        </Swiper>
      </OffersContainer>
    </OffersWraper>
  );
};
export default Offers;
