import * as Animations from '@assets/animations'
import type { AnimationsName } from '@tools/types'
import Lottie, { type LottieProps } from 'react-lottie-player'

export type AnimationProps = Omit<LottieProps, 'animationData'> & {
  name: AnimationsName
}

const Animation = ({
  name,
  play = true,
  loop = true,
  ...props
}: AnimationProps) => {
  const animationData = Animations[name]

  return (
    <Lottie
      animationData={animationData}
      play={play}
      loop={loop}
      role="none"
      {...props}
    />
  )
}

export default Animation
