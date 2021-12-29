import * as S from './addtocart.style'



interface AddToCartProps {
  text: string;

}


export const AddToCart = (props: AddToCartProps) => {
  return(
    <S.Button>{props.text}</S.Button>
  )
}