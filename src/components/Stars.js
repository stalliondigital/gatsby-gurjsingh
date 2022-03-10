import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function Stars() {
  return (
    <span className="text-end pe-3 fs-6">
      <FontAwesomeIcon className="font-awesome" icon={faStar}></FontAwesomeIcon>{" "}
      <FontAwesomeIcon className="font-awesome" icon={faStar}></FontAwesomeIcon>{" "}
      <FontAwesomeIcon className="font-awesome" icon={faStar}></FontAwesomeIcon>{" "}
      <FontAwesomeIcon className="font-awesome" icon={faStar}></FontAwesomeIcon>{" "}
      <FontAwesomeIcon className="font-awesome" icon={faStar}></FontAwesomeIcon>
    </span>
  )
}
