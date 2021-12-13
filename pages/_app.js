import Layout from '@/components/Layout'
import '../styles/globals.css'
import ToastContainer from '@/components/ToastContainer'
import { ToastProvider } from '@/context/ToastContext'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </Layout>
  )
}

export default MyApp
