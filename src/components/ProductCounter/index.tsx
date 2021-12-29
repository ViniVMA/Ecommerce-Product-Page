import { AddToCart } from '../AddToCart'
import * as S from './productcounter.style'
import { useState } from 'react'


export const ProductCounter = () => {

  const [count, setCount] = useState(0);


    return(
    <S.ComponentWrapper>
      <S.ButtonsWrapper>
          <S.ButtonS onClick={() => setCount(count - 1) } >-</S.ButtonS>
          <S.Counter>{count}</S.Counter>
          <S.ButtonS onClick={() => setCount(count + 1) } >+</S.ButtonS>
      </S.ButtonsWrapper>
      <AddToCart  text="Add To Cart"/>
    </S.ComponentWrapper>
    )
}