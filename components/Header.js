import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-24 h-24 cursor-pointer'>
          <Image
            src='/Instagram_logo.svg.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
          <Image src='/insta-logo.png' layout='fill' objectFit='contain' />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
