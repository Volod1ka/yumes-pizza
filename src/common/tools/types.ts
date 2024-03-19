import * as Animations from '../../assets/animations'
import * as Icons from '../../assets/icons'

export type IconsName = keyof typeof Icons

export const ARRAY_OF_ICONS_NAME = Object.keys(Icons) as IconsName[]

export type AnimationsName = keyof typeof Animations

export const ARRAY_OF_ANIMATIONS_NAME = Object.keys(
  Animations,
) as AnimationsName[]
