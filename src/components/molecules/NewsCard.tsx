import type { News } from '@models/news'
import { twMerge } from 'tailwind-merge'

export type NewsCardProps = {
  news: News
  isActive?: boolean
}

const NewsCard = ({
  news: { image, title },
  isActive = true,
}: NewsCardProps) => (
  <div
    className={twMerge(
      'flex-1 rounded-[20px] bg-thin_gray overflow-hidden ease-out duration-500',
      !isActive && 'scale-[0.85] blur-sm',
    )}
  >
    <img className="h-full w-full object-cover" src={image} alt={title} />
  </div>
)

export default NewsCard
