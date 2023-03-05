import LottieAnimation from '@/components/lottie-animation'

export default function WhoAmI() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to Jaehyeok's world.
          {/* <br className="hidden lg:inline-block" />
          In my head */}
        </h1>
        <p className="mb-8 leading-relaxed">
          소녀들의 하나에 이제 같이 비둘기, 했던 새겨지는 오는 이름을
          버리었습니다. 소녀들의 동경과 지나고 있습니다. 위에도 이웃 가득 보고,
          까닭입니다. 하나의 멀리 어머니, 헤는 시와 하늘에는 거외다. 하나의
          마디씩 된 별을 이런 나는 아스라히 때 별들을 듯합니다. 차 묻힌 아름다운
          하나에 나는 경, 별빛이 파란 옥 까닭입니다. 내일 별 하나의 벌써 묻힌
          계십니다. 어머니, 잔디가 별 내일 이런 있습니다. 애기 하나에 우는 한
          이웃 하나에 봅니다. 나는 어머님, 이름과 노새, 별 토끼, 했던 언덕
          듯합니다. 지나가는 이런 나는 슬퍼하는 자랑처럼 잔디가 청춘이 잠,
          이네들은 버리었습니다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Go to my projects
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <LottieAnimation></LottieAnimation>
      </div>
    </>
  )
}
