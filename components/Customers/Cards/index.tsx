import { StaticImageData } from "next/image"
import React, { FC } from "react"
import { AuthInfo, CardContent, CardImage, CardWraper, Comment } from "./style"

type Props = {
  image: StaticImageData
  comment: string
  author: string
  location: string
}

const Cards: FC<Props> = ({ image, comment, author, location }) => {
  return (
    <CardWraper>
      <CardImage src={image} width={75} height={75} />
      <CardContent>
        <Comment>{comment}</Comment>
        <AuthInfo>
          {author} | {location}
        </AuthInfo>
      </CardContent>
    </CardWraper>
  )
}

export default Cards
