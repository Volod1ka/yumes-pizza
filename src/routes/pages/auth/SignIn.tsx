import { Button, TextButton } from '@components/molecules/buttons'
import { Input, type InputProps } from '@components/molecules/form'
import { getInputKey } from '@components/molecules/form/Input'
import { AuthLayout } from '@components/templates'
import { useSignInForm } from '@hooks/form'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { AUTH_USER } from '@tools/common'
import { Navigate, useNavigate } from 'react-router-dom'

const onClickForgotPassword = () => {}

const SignInPage = () => {
  const navigation = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isValid },
    hasInvalideField,
  } = useSignInForm()

  // TODO
  if (AUTH_USER) {
    return <Navigate to={NAVIGATION_ROUTES.profile} replace />
  }

  const onSubmitSignIn = handleSubmit(async data => {
    if (!isValid) {
      return
    }

    // TODO
    console.log(JSON.stringify({ data }))
  })

  const inputs = [
    {
      maxLength: 40,
      type: 'email',
      ...register('email', { required: true }),
      placeholder: 'Email',
    },
    {
      maxLength: 30,
      type: 'password',
      ...register('password', { required: true }),
      placeholder: 'Password',
    },
  ] satisfies InputProps[]

  return (
    <AuthLayout
      form={
        <form
          className="flex flex-1 flex-col gap-[30px] p-[30px]"
          onSubmit={onSubmitSignIn}
        >
          <h1 className="text-heading1 font-bold text-dark_gray">
            Sign in to your personal account
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

          <div className="flex flex-row justify-between">
            <Button type="submit" label="Sign In" disabled={!isValid} />

            <div className="flex flex-row gap-[15px] items-center">
              <p className="text-description text-dark_gray font-medium">
                Don't have an account yet?
              </p>
              <TextButton
                className="text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red"
                label="Sign Up"
                onClick={() => {
                  navigation(NAVIGATION_ROUTES.signUp)
                }}
              />
            </div>
          </div>

          <TextButton
            label="Forgot your password?"
            className="mt-auto self-end"
            onClick={onClickForgotPassword}
          />
        </form>
      }
    />
  )
}

export default SignInPage
