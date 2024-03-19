import * as Animations from '@assets/animations'
import type { AnimationsName } from '@tools/types'
import { forwardRef } from 'react'
import LottieView, { type LottieProps, type Options } from 'react-lottie'

export type AnimationProps = Omit<LottieProps, 'options'> &
  Omit<Options, 'animationData'> & {
    name: AnimationsName
  }

const Animation = forwardRef<LottieView, AnimationProps>(
  ({ name, autoplay = true, loop = true, rendererSettings, ...props }, ref) => {
    const animationData = Animations[name]

    return (
      <LottieView
        ref={ref}
        ariaRole="none"
        isClickToPauseDisabled
        {...props}
        options={{ animationData, autoplay, loop, rendererSettings }}
      />
    )
  },
)

export default Animation
