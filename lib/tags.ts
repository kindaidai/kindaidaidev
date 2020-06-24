import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type AllPostData = {
  id?: string
  title?: string
  date?: string
  tags?: string[]
}[]

type SortedData = (tag?: string | string[]) => AllPostData

type Tags = () => {
  params: { tag: string }
}[]

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getSortedPostDataFromTag: SortedData = (tag) => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const { title, date, tags } = matterResult.data
    if (tags.includes(tag)) {
      return {
        id,
        title,
        date,
        tags,
      }
    }
    return {}
  })

  return allPostData
    .filter((data) => Object.keys(data).length !== 0)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      return -1
    })
}

export const getAllTags: Tags = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const tags: string[] = []
  fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return tags.push(matterResult.data.tags)
  })
  const setTags = new Set(tags.flat())

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       tag: 'ruby'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'typescript'
  //     }
  //   }
  // ]
  return Array.from(setTags).map((tag) => {
    return {
      params: {
        tag,
      },
    }
  })
}
