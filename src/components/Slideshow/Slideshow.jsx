import React, { useState } from 'react';
import * as Style from './Slideshow.css'
import { slideImages } from './dataSlide/slideImages';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const Slideshow = () => {
  let [index, setIndex] = useState(0);

  const moveRight = () => {
    if(index < (slideImages.length - 1)) {
        setIndex(index + 1);
    } else {
        setIndex(0);
    }
  }
  const moveLeft = () => {
    if(index > 0) {
        setIndex(index - 1);
    } else {
        setIndex(slideImages.length - 1);
    }
  }

  return (
    <Style.Slideshow>

        <Style.Title>
            <h2>Coné Trufados</h2>
            <h3>Diversos Sabores</h3>
        </Style.Title>

      <Style.Slide>
        <button onClick={moveLeft}><FaArrowAltCircleLeft /></button>

        <img src={slideImages[index].image} alt={slideImages[index].alt}/>

        <button onClick={moveRight}>
            <FaArrowAltCircleRight />
        </button>
      </Style.Slide>

      <Style.Menu>
        { slideImages.length > 0 && (
            slideImages.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={slide.alt}
                    onClick={() => setIndex(index)}
                />
            ))
        )}
      </Style.Menu>

    </Style.Slideshow>
  )
}

export default Slideshow
