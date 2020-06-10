import Link from 'next/link'

type Props = {
  name: string
  href: string
}

const NavLink = (props: Props): JSX.Element => {
  const { name, href } = props
  return (
    <Link href={href}>
      <a className="mr-5 hover:text-gray-900">{name}</a>
    </Link>
  )
}

export default NavLink
