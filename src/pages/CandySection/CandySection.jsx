import React from 'react';
import * as Style from './CandySection.css';
import { candyDatas } from '../../assets/data/dataCandy';
import CardItem from '../../components/CardItem/CardItem';


const CandySection = () => {
  return (
    <Style.CandySection>
    <div className='moveCandy'>
      <Style.Titles>
        <h2>Doces</h2>
        <h3>Diversos Doces</h3>
      </Style.Titles>

      <Style.GridItem>
          {
            candyDatas && candyDatas.map((candy, index) => (
              <div key={index}><CardItem {...candy}/></div>
            ))
          }
      </Style.GridItem>
    </div>   
    </Style.CandySection>
  );
};


export default CandySection
