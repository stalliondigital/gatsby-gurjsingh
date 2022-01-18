import React from "react"
import "../scss/main.scss"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
