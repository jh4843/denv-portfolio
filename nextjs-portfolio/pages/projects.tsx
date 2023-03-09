import Head from 'next/head'
import Layout from '@/components/layout'
import { TOKEN, DATABASE_ID } from '../config'

interface iProjectsResultPropertiesNameTitle {
  type: string
  text: {
    content: string
    link: {
      url: string
    }
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string
}

interface iProjectsResultPropertiesName {
  id: string
  type: string
  title: iProjectsResultPropertiesNameTitle[]
}

interface iProjectsResultProperties {
  // Description: object
  // Tags: object
  // Github: object
  Name: iProjectsResultPropertiesName
}

interface iProjectsResult {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  // created_by: Array<Object>
  // last_edited_by: Array<Object>
  // cover: null | Array<Object>
  // icon: null | Array<Object>
  // parent: null | Array<Object>
  archived: boolean
  properties: null | iProjectsResultProperties
  url: string
}

// Client (in Borwser)
export default function Projects({ projects }) {
  const resultProjects: iProjectsResult[] = projects.results

  const projectTitles = resultProjects.map((aProject: iProjectsResult) => {
    if (
      aProject.properties?.Name.title == undefined ||
      aProject.properties?.Name.title.length < 1
    ) {
      return ''
    } else {
      return aProject.properties?.Name.title[0].plain_text
    }
  })

  console.log(projectTitles)

  return (
    <>
      <Layout>
        <Head>
          <title>Jaehyeok Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>총 프로젝트: {projectTitles.length}</h1>

        {projects.results.map((aProject: iProjectsResult, index: number) => (
          <h1 key={index}>{aProject.properties?.Name.title[0].plain_text}</h1>
        ))}
      </Layout>
    </>
  )
}

// 변경될 때마다 호출하고 싶으면: getServerSideProps

// 처음 빌드타임에 호출 (Server)
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  )
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err))

  const projects = await res.json()

  console.log(projects)

  const resultProjects: iProjectsResult[] = projects.results

  const projectIds = resultProjects.map(
    (aProject: iProjectsResult) => aProject.id,
  )

  const projectTitles = resultProjects.map((aProject: iProjectsResult) => {
    if (
      aProject.properties?.Name.title == undefined ||
      aProject.properties?.Name.title.length < 1
    ) {
      return ''
    } else {
      return aProject.properties?.Name.title[0].plain_text
    }
  })

  console.log(`Projects IDS: ${projectIds}\nProject Names: ${projectTitles}`)

  return {
    props: { projects }, // will be passed to the page component as props
  }
}
