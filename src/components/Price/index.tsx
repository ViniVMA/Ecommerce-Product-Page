import * as S from './price.style'
import { Sneakers } from '../../components/ProductDescription/Product'


export const Price = () => {

  let price = Sneakers.price
  let discount = Sneakers.discount

  const discountCalc = (price: number, discount: number) => {
    return (price * discount / 100 );
    } 

  return(
    <S.PriceWrapper>
      
        <S.Discount>${discountCalc(price, discount)}.00</S.Discount>
        <S.DiscountPercent>{discount}%</S.DiscountPercent>
        <S.Price>${price}.00</S.Price>
      
    </S.PriceWrapper>

  )
}

