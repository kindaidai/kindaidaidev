import Link from 'next/link'

type Props = {
  id: string
  date: string
  title: string
}

export const Content: React.FC<Props> = ({ id, date, title }: Props) => {
  return (
    <div className="py-2 flex flex-wrap md:flex-no-wrap">
      <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="mt-1 text-gray-500 text-md">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="mt-1 text-md font-medium text-gray-900 title-font mb-2 sm:text-sx">
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a className="hover:text-gray-600">{title}</a>
          </Link>
        </h2>
      </div>
    </div>
  )
}
