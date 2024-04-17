export const NOT_FIRST_WHITESPASE: RegExp = /^(\S)/

export const TEXT_WITHOUT_WHITESPACE: RegExp = /^(\S)+$/gm

export const TEXT_WITHOUT_LONG_SPACE: RegExp = /^(\S)( ?\p{L})*$/giu

export const NUMBER: RegExp = /^\d+$/

export const PHONE_NUMBER: RegExp = /^\d{10,11}$/

export const HOUSE_NUMBER: RegExp =
  /^(?:(\d+)|(\d+\p{L})|(\d+\/\p{L})|(\p{L}\d+)|(\p{L}\d+\/\d+)|(\d+\/\d+))$/giu

export const APPARTEMENT_NUMBER: RegExp = /^(?:(\d+)|(\d+\p{L}))$/giu

export const ENTRANCE_NUMBER: RegExp =
  /^(?:(\d+)|(\d+\p{L})|(\d+\/\p{L})|(\p{L}\d+)|(\p{L}\d+\/\d+)|(\p{L}\d+-\d+))$/giu
