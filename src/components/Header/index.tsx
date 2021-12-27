import * as S from './header.style'
import logo from '/assets/images/logo.svg'
import cart from '/assets/images/icon-cart.svg'




export const Header = () =>{
    return(
      <S.Header>

        <div>
        <img src={logo}/>
        </div>
       
        <ul>
          <li><a href="/">Collections</a></li>
          <li><a href="/">Man</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
       </ul>
       
        <img src={cart}/>

      </S.Header>
    )
}