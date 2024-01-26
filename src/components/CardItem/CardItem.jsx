import React from 'react';
import { FaPlus } from "react-icons/fa";
import * as Style from './CardItem.css';

const CardItem = ({image, title, subTitle, paragraph, pathLink}) => {
    
  return (
    <Style.CardItem>
        <div className="container-img">
            <img src={image} alt={title} />
        </div>

        <Style.TitleCard>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </Style.TitleCard>

        <p>{paragraph}</p>

        <a href={pathLink} target="_blank">
            <FaPlus />
            <span>Detalhes</span>
        </a>
    </Style.CardItem>
  )
}

export default CardItem
