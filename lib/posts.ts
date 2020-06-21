import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import codeExtra from 'remark-code-extra'
import breaks from 'remark-breaks'

export type AllPostData = {
  id: string
  title: string
  date: string
  tags: string[]
}[]

type AllPostIds = {
  params: { id: string }
}[]

type PostsData = () => AllPostData
type PostIds = () => AllPostIds

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getSortedPostsData: PostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostData: AllPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { title, date, tags } = matter(fileContents).data
    return {
      id,
      title,
      date,
      tags,
    }
  })

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    return -1
  })
}

export const getAllPostIds: PostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getPostData = async (id: string | string[] | undefined) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(breaks)
    .use(highlight)
    .use(html)
    .use(codeExtra, {
      transform: (node: { meta: any }) =>
        node.meta
          ? {
              before: [
                {
                  type: 'element',
                  tagName: 'div',
                  properties: {
                    class: 'text-xs text-gray-600 bg-gray-200 rounded-t px-2',
                  },
                  children: [
                    {
                      type: 'text',
                      value: node.meta,
                    },
                  ],
                },
              ],
            }
          : null,
    })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
