import React from 'react';
import * as Style from './ProductGrid.css';
import Item from '../../components/Item/Item';



const ProductGrid = ({titles, paragraph, datas}) => {
  
  return (
    <Style.ProductGrid id='moveCake'>
      <Style.Title>
        <h2>{titles[0]}</h2>
        <h3>{titles[1]}</h3>
        <p>{paragraph}</p>
      </Style.Title>

      <Style.Container>

        <Style.Grid>
            {
              datas && datas.map((data, index) => <div key={index}><Item {...data}/></div>)
            }
        </Style.Grid>

      </Style.Container>
    </Style.ProductGrid>
  )
}

export default ProductGrid
