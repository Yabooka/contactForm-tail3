import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='max-w-[980px] mx-auto mt-10 mb-10'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
