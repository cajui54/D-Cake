import React from 'react'
import * as Style from './GridItem.css';
import { datasBrigadeiros } from './datas/datasBrigadeiros';
import imgBrigadeiro from '../../../assets/images/candys/candy08.jpg';

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

        <Style.Side>
          <img src={imgBrigadeiro} alt="Brigadeiro Artesanal Gourmet"/>
          <article>
                <p>
                    <span>Brigadeiro Artesanal Gourmet</span>, temos diversos tipos e sabores, para mais informações
                    click no link abaixo:
                </p>
                <a href="https://wa.me/5511973828299" target="_blank">
                    + Detalhes
                </a>
          </article>
        
        </Style.Side>
    </Style.GridMain>
  )
}

export default GridItem
