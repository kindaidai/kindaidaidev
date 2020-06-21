import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getSortedPostsData, AllPostData } from '../lib/posts'
import { Content } from '../components/Content'
import { Layout } from '../components/Layout'

type Props = {
  allPostsData: AllPostData
}

const Index: React.FC<Props> = ({ allPostsData }: Props) => {
  return (
    <>
      <Head>
        <title>kindaidaidev</title>
        <link rel="icon" href="/profile.ico" />
      </Head>
      <Layout>
        {allPostsData.map(({ id, title, date, tags }) => (
          <Content id={id} title={title} date={date} tags={tags} key={id} />
        ))}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Index
