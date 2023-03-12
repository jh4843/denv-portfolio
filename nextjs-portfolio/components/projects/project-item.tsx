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
    <div className="position:absolute max-h-90 m-3 bg-zinc-200 dark:bg-slate-700 rounded-md content-center items-center">
      <Image
        className="rounded-t-md w-full h-2/3"
        src={imgSrc}
        alt="{title} image"
        width={200}
        height={100}
        sizes="10vw"
        //fill
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-semibold">Title: {title}</h1>
        <h5>Desc: {desc}</h5>
        <div className="flex flex-wrap items-start mt-2">
          {tags?.multi_select?.map(
            (aTag: MyType.iProjectsResultPropertiesTagMultiSel) => (
              <h5
                key={aTag.id}
                className="w-30 text-center px-2 py-1 mr-2 rounded-md bg-pink-100 dark:bg-blue-600 hover:font-bold cursor-pointer"
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
