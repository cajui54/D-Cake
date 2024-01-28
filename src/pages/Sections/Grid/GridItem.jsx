import React from 'react'
import * as Style from './GridItem.css';
import { datasBrigadeiros } from './datas/datasBrigadeiros';

const GridItem = () => {
  return (
    <Style.GridMain>
        <Style.TitlesContainer>
            <h2>Brigadeiros</h2>
            <h3>Diversos Sabores e Estilos</h3>
        </Style.TitlesContainer>

        <Style.ItemContainer>
            { datasBrigadeiros.length > 0 && (
                datasBrigadeiros.map((data, index) => (
                    <Style.Item key={index}>
                        <img src={data.image} alt={data.alt} />
                        <h2>{data.title}</h2>
                    </Style.Item>
                ))
            )}
         
        </Style.ItemContainer>
     
    </Style.GridMain>
  )
}

export default GridItem
