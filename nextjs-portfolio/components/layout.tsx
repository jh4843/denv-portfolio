import React, { ReactNode } from "react"

import Header from "./header"
import Footer from "./footer"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-primary">
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}
