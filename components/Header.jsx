import Link from 'next/link'

function Header() {
  return (
    <header className='w-full bg-red-200'>
      <div className='flex items-center justify-between max-w-5xl mx-auto h-[70px] '>
        <div className='logo'>
          <Link href='/'>Logo here</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
