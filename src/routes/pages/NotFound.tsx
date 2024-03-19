import { Animation } from '@components/atoms'

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div>
        <Animation
          name="PageNoFoundLottie"
          width="50%"
          style={{ minWidth: 440 }}
        />
      </div>
    </div>
  )
}

export default NotFoundPage
