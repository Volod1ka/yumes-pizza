import { ContactDetails } from '@components/molecules'

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-light_gray">
      <div className="flex flex-col px-10 pt-10 max-lg:px-5 pb-4 bg-white max-w-[1440px] mx-auto">
        <div className="flex">
          <ContactDetails
            className="flex-1"
            icon="PhoneIcon"
            title="Contacts"
            description={['050 90 34 801', '066 45 34 000']}
          />
          <ContactDetails
            className="flex-2"
            icon="LocationIcon"
            title="Address"
            description={['address 1', 'address 2']}
          />
          <ContactDetails
            className="flex-1"
            icon="TimeIcon"
            title="Work time"
            description={['Mon-Fri: 9:00 - 22:00', 'Sat-Sun: 10:00 - 20:00']}
          />
        </div>

        <div className="flex pt-9 items-center">
          <div className="flex-1 max-lg:hidden" />

          <div className="shrink-0 justify-center">
            <p className="text-caption text-dark_gray text-center">
              2024 © “Yumes Pizza”
            </p>
          </div>

          <div className="flex flex-1 justify-end">
            <p className="text-caption text-dark_gray">
              Powered by <span className="font-bold">AlexAT</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
