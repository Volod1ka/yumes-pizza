import { zodResolver } from '@hookform/resolvers/zod'
import { get } from 'lodash'
import { useForm, type FieldPath } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignInForm = z.infer<typeof signInSchema>

const useSignInForm = () => {
  const form = useForm<SignInForm>({
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
    delayError: 200,
  })

  const hasInvalideField = (name: FieldPath<SignInForm>) =>
    !!get(form.formState.errors, name, false)

  return { ...form, hasInvalideField }
}

export default useSignInForm
