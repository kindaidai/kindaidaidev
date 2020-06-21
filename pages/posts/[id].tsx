import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'
import markdownStyles from '../../components/markdown-styles.module.css'
import { Tag } from '../../components/tag'

type Props = {
  postData: {
    id: string
    title: string
    date: string
    tags: string[]
    contentHtml: string
  }
}

const Post: React.FC<Props> = ({ postData }: Props) => {
  const { title, date, tags, contentHtml } = postData
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/profile.ico" />
      </Head>
      <main>
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container md:px-48 sm: px-12 py-10 mx-auto">
            <div className="-my-8">
              <h2 className="text-3xl font-extrabold">{title}</h2>
              <div className="text-gray-500 text-md">{date}</div>
              <div className={markdownStyles.markdown}>
                <div
                  className="py-05"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
              <div>
                {tags.map((tag) => (
                  <Tag name={tag} />
                ))}
              </div>
              <Link href="/">
                <a className="hover:text-gray-600">TOPへ戻る</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id)
  return {
    props: {
      postData,
    },
  }
}

export default Post
