import Image from "next/image"
import * as MyType from "@/types"

export default function ProjectItem({
  data,
}: {
  data: MyType.iProjectsResult
}) {
  const title = data.properties?.Name.title[0].plain_text
  const desc = data.properties?.Description.rich_text[0].plain_text
  //const skills = data.properties?.Tags.multi_select
  const tags = data.properties?.Tags

  const gitHubLink = data.properties?.Github.url

  let imgSrc = data.cover?.file?.url

  if (imgSrc == undefined && data.cover?.external != undefined) {
    imgSrc = data.cover?.external.url
  }

  if (imgSrc == undefined) imgSrc = ""

  console.log(imgSrc)

  return (
    //<div className="flex flex-col m-3  bg-zinc-200 dark:bg-slate-700 rounded-md content-center items-center">
    <div className="position:absolute max-h-70 m-3 transform content-center items-center overflow-auto rounded-md border border-gray-300 bg-zinc-200 transition duration-300 hover:scale-110 hover:shadow-lg dark:border-gray-200/50  dark:bg-slate-700">
      <div className="h-2/3 w-full rounded-t-md">
        <Image
          className="h-full w-full rounded-t-md"
          src={imgSrc}
          alt="{title} image"
          width={200}
          height={100}
          sizes="20vw"
          //fill
          quality={100}
        />
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-semibold">Title: {title}</h1>
        <h5>Desc: {desc}</h5>
        <div className="mt-2 flex flex-wrap items-start">
          {tags?.multi_select?.map(
            (aTag: MyType.iProjectsResultPropertiesTagMultiSel) => (
              <h5
                key={aTag.id}
                className="w-30 mr-2 cursor-pointer rounded-md bg-pink-100 px-2 py-1 text-center hover:font-bold dark:bg-blue-600"
              >
                {aTag.name}
              </h5>
            ),
          )}
        </div>
        <a href={gitHubLink}>Github Link</a>
      </div>
    </div>
  )
}
