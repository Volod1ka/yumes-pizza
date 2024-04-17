import { zodResolver } from '@hookform/resolvers/zod'
import type { Payment } from '@models/order'
import {
  APPARTEMENT_NUMBER,
  ENTRANCE_NUMBER,
  HOUSE_NUMBER,
  NOT_FIRST_WHITESPASE,
  NUMBER,
  PHONE_NUMBER,
  TEXT_WITHOUT_LONG_SPACE,
  TEXT_WITHOUT_WHITESPACE,
} from '@tools/regexp'
import { useForm, type DefaultValues } from 'react-hook-form'
import { z } from 'zod'

const cartSchema = z.object({
  name: z.string().regex(TEXT_WITHOUT_LONG_SPACE).min(2),
  phone: z.string().regex(PHONE_NUMBER),
  address: z.object({
    street: z.string().regex(TEXT_WITHOUT_LONG_SPACE).min(3),
    building: z.string().regex(HOUSE_NUMBER).min(1),
    appart: z.string().regex(APPARTEMENT_NUMBER).min(1).or(z.literal('')),
    entrance: z.string().regex(ENTRANCE_NUMBER).min(1).or(z.literal('')),
    floor: z.string().regex(NUMBER).min(1).or(z.literal('')),
    intercom: z
      .string()
      .regex(TEXT_WITHOUT_WHITESPACE)
      .min(1)
      .or(z.literal('')),
  }),
  details: z.string().regex(NOT_FIRST_WHITESPASE).min(5).or(z.literal('')),
  payment: z.enum<Payment, [Payment, ...Payment[]]>(['cash', 'terminal']),
})

export type CartForm = z.infer<typeof cartSchema>

const useCartForm = (defaultValues?: DefaultValues<CartForm>) => {
  const form = useForm<CartForm>({
    mode: 'onTouched',
    defaultValues: {
      payment: 'cash',
      ...defaultValues,
    },
    resolver: zodResolver(cartSchema),
    delayError: 200,
  })

  return form
}

export default useCartForm
