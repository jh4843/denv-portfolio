import React from "react"

import Lottie from "react-lottie-player"
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "@/public/developer-ani.json"

export default function LottieAnimation() {
  return <Lottie loop animationData={lottieJson} play />
}
