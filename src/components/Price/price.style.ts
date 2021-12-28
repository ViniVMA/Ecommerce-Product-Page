import styled from 'styled-components';



export const PriceWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 5fr;
    grid-gap: 10px;

`

export const Discount = styled.div`
    font-size: 32px;
    font-weight: bold;
 
`

export const Price = styled.div`
   font-weight: bold;
   color: #b6bcc8;
   text-decoration-line: line-through;
   grid-row: 2;
`

export const DiscountPercent = styled.div`
    padding: 2px 5px;
    grid-column: 2;
    align-self: center;
    justify-self: center;
    background-color: #ffede0;
    border-radius: 5px;
    color: #ff7d1a;
    font-weight: bold;
`
