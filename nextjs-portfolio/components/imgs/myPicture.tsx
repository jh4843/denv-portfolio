import Image from "next/image"

export default function MyPicture({
  width,
  height,
}: {
  width: number
  height: number
}) {
  return (
    <div className="w-{width} h-{height}">
      <Image src="/Jaehyeok.png" alt="JH" width={width} height={height} />
    </div>
  )
}
