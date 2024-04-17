import { zodResolver } from '@hookform/resolvers/zod'
import { PHONE_NUMBER, TEXT_WITHOUT_LONG_SPACE } from '@tools/regexp'
import { get } from 'lodash'
import { useForm, type FieldPath } from 'react-hook-form'
import { z } from 'zod'

const signUpSchema = z.object({
  name: z.string().regex(TEXT_WITHOUT_LONG_SPACE).min(2),
  phone: z.string().regex(PHONE_NUMBER),
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignUpForm = z.infer<typeof signUpSchema>

const useSignUpForm = () => {
  const form = useForm<SignUpForm>({
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema),
    delayError: 200,
  })

  const hasInvalideField = (name: FieldPath<SignUpForm>) =>
    !!get(form.formState.errors, name, false)

  return { ...form, hasInvalideField }
}

export default useSignUpForm
