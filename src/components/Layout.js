import React from "react"
import "../scss/main.scss"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
      {children}
      </div>
      <Footer />
    </div>
  )
}
