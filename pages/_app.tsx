import { AppProps } from 'next/app'
import Icon from '../components/header/Icon'
import NavLink from '../components/header/NavLink'
import '../styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Icon />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink name="about" />
            <NavLink name="blog" />
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}
