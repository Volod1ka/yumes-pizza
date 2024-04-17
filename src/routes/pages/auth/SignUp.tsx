import { Button } from '@components/molecules/buttons'
import { Input, type InputProps } from '@components/molecules/form'
import { getInputKey } from '@components/molecules/form/Input'
import { AuthLayout } from '@components/templates'
import { useSignUpForm } from '@hooks/form'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { AUTH_USER } from '@tools/common'
import { Navigate } from 'react-router-dom'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    hasInvalideField,
  } = useSignUpForm()

  // TODO
  if (AUTH_USER) {
    return <Navigate to={NAVIGATION_ROUTES.profile} replace />
  }

  const onSubmitSignUp = handleSubmit(async data => {
    if (!isValid) {
      return
    }

    // TODO
    console.log(JSON.stringify({ data }))
  })

  const inputs = [
    {
      maxLength: 50,
      ...register('name', { required: true }),
      placeholder: 'Name',
    },
    {
      maxLength: 11,
      ...register('phone', { required: true }),
      type: 'tel',
      placeholder: 'Phone number',
    },
    {
      maxLength: 40,
      ...register('email', { required: true }),
      type: 'email',
      placeholder: 'Email',
    },
    {
      maxLength: 30,
      ...register('password', { required: true }),
      type: 'password',
      placeholder: 'Password',
    },
  ] satisfies InputProps[]

  return (
    <AuthLayout
      form={
        <form
          className="flex flex-1 flex-col gap-[30px] p-[30px]"
          onSubmit={onSubmitSignUp}
        >
          <h1 className="text-heading1 font-bold text-dark_gray">
            Sign up to your personal account
          </h1>

          {inputs.map(input => (
            <Input
              key={getInputKey(input.name)}
              {...input}
              required
              containerStyle="w-full"
              invalid={hasInvalideField(input.name)}
            />
          ))}

          <Button
            type="submit"
            label="Sign Up"
            className="mt-auto self-end"
            disabled={!isValid}
          />
        </form>
      }
    />
  )
}

export default SignUpPage
