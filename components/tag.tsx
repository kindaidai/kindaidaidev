import Link from 'next/link'

type Props = {
  name: string
}

export const Tag: React.FC<Props> = ({ name }: Props) => (
  <span className="text-sm mr-1 px-1 bg-gray-300 rounded shadow-md">
    <Link href="/tags/[tag]" as={`/tags/${name}`}>
      <a className="hover:text-gray-600">{name}</a>
    </Link>
  </span>
)
