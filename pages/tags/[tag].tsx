import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import {
  getSortedPostDataFromTag,
  getAllTags,
  AllPostData,
} from '../../lib/tags'
import { Content } from '../../components/Content'
import { Layout } from '../../components/Layout'

type Props = {
  allPostsData: AllPostData
  tag: string
}

const Index: React.FC<Props> = ({ allPostsData, tag }: Props) => {
  return (
    <>
      <Head>
        <title>kindaidaidev</title>
        <link rel="icon" href="/profile.ico" />
      </Head>
      <Layout>
        <span className="text-2xl border-b">tag: {tag}</span>
        {allPostsData.map(({ id, title, date }) => (
          <Content id={id} title={title} date={date} key={id} />
        ))}
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = getAllTags()
  return {
    paths: allTags,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // tagから該当するcontentを全部引っ張ってくる
  const tag = params?.tag
  const allPostsData = getSortedPostDataFromTag(tag)
  return {
    props: {
      allPostsData,
      tag,
    },
  }
}

export default Index
