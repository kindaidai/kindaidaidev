import Link from 'next/link'

const Icon = (): JSX.Element => {
  return (
    <Link href="/">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">kindaidaidev</span>
      </a>
    </Link>
  )
}

export default Icon
