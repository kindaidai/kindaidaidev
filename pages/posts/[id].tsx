import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'
import markdownStyles from '../../components/markdown-styles.module.css'
import { Tag } from '../../components/tag'
import { Layout } from '../../components/Layout'

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
      <Layout>
        <h2 className="text-3xl font-extrabold">{title}</h2>
        <div className="text-gray-500 text-md">{date}</div>
        <div className={markdownStyles.markdown}>
          <div
            className="py-05"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
        <div className="py-4 my-4">
          {tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
        <Link href="/">
          <a className="hover:text-gray-600">TOPへ戻る</a>
        </Link>
      </Layout>
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
