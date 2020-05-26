import { AppProps } from 'next/app'
import css from 'styled-jsx/css'
import NavigationBar from '../components/NavigationBar'

const navigationBar = css`
  div {
    border-bottom: solid 1px silver;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="navigationBar">
        <NavigationBar />
      </div>
      <style jsx>{navigationBar}</style>
      <Component {...pageProps} />
    </>
  )
}
