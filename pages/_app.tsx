import { AppProps } from 'next/app'
import Icon from '../components/header/Icon'
import '../styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Icon />
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}
