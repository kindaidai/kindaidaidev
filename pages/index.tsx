import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getSortedPostsData, AllPostData } from '../lib/posts'
import { Content } from '../components/Content'

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
      <main>
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container md:px-48 sm: px-12 py-10 mx-auto">
            <div className="-my-8">
              {allPostsData.map(({ id, title, date }) => (
                <Content id={id} title={title} date={date} key={id} />
              ))}
            </div>
          </div>
        </section>
      </main>
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
