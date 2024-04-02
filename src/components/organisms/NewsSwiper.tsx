import { NewsCard } from '@components/molecules'
import type { News } from '@models/news'
import type { AllHTMLAttributes } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export type NewsSwiperProps = Pick<
  AllHTMLAttributes<HTMLElement>,
  'className'
> & {
  news: News[]
}

const NewsSwiper = ({ news, className }: NewsSwiperProps) => {
  return (
    <div className={twMerge(className, 'relative')}>
      <div className="z-10 absolute top-0 flex h-full w-1/6 from-white from-30%% to-transparent bg-gradient-to-r pointer-events-none" />
      <div className="z-10 absolute top-0 right-0 flex h-full w-1/6 from-white from-30% to-transparent bg-gradient-to-l pointer-events-none" />

      <Swiper
        centeredSlides
        grabCursor
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4,
          renderBullet: (index: number, cN: string) => {
            return `<span class="${twMerge(cN, 'h-[14px] w-5 rounded-[7px] bg-dark_red').toString()}">${index + 1}</span>`
          },
        }}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        slidesPerView="auto"
        className="w-full"
        modules={[Autoplay, Pagination]}
      >
        {news.map(item => (
          <SwiperSlide
            key={`slide-${item.id}`}
            className={twMerge('flex h-[400px] w-2/3')}
          >
            {({ isActive }) => <NewsCard news={item} isActive={isActive} />}
          </SwiperSlide>
        ))}
        <div slot="container-end" className="py-6" />
      </Swiper>
    </div>
  )
}

export default NewsSwiper
