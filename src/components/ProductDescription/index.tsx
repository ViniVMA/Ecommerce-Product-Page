import { Price } from '../Price'
import * as S from './productDescription.style'


export const ProductDescription = () => {
    return(
      <S.Description>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited <br/> 
        Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <Price />
        
      </S.Description>
    )
}