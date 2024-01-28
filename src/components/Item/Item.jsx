import React from 'react'
import * as Style from './Item.css'

const Item = ({id, image, title, subTitle, paragraph, pathLink,}) => {
  return (
    <Style.Item>
      <img src={image} alt={title} />

      <Style.infoItem>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{paragraph}</p>
        <a href={pathLink} target="_blank">
            + Detalhes
        </a>
      </Style.infoItem>
    </Style.Item>
  )
}

export default Item
