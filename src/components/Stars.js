import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function Stars() {
  const stars = [1, 2, 3, 4, 5]
  return (
    <span>
      {stars.map((star, index) => (
        <FontAwesomeIcon
          key={index}
          className="font-awesome experience-star"
          transform="shrink-4"
          icon={faStar}
        ></FontAwesomeIcon>
      ))}
    </span>
  )
}
