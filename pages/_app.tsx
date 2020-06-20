import { AppProps } from 'next/app'
import '../styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../node_modules/highlight.js/styles/atom-one-dark.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mb-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
