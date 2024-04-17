import type { FC, ReactNode } from 'react'

export type AuthLayoutProps = {
  form?: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = props => {
  return (
    <div className="flex flex-1 h-full items-center px-[114px] max-lg:px-5">
      <div className="flex flex-1 flex-row mb-[30px] h-full max-h-[530px] max-w-[1440px] rounded-[20px] shadow-md overflow-hidden">
        <div className="flex justify-center items-center w-5/12 from-white to-light_gray bg-gradient-to-b max-lg:hidden">
          <h1 className="text-5xl text-dark_gray">Yumes Pizza</h1>
        </div>
        {props.form}
      </div>
    </div>
  )
}

export default AuthLayout
