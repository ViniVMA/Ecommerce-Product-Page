import styled from 'styled-components';


export const Header = styled.nav`
      display: grid;
      grid-template-columns: 1fr 4fr 0.5fr;
      align-items: center;
      justify-content: space-between;
      padding: 35px 0;
      border-bottom: 2px solid #e8e7ec;


      ul {
        list-style-type: none;  
        display: flex;
        font-size: 16px;
        color: #8f9094;

          a {
            text-decoration: inherit;
            color: inherit;
          }
          a:hover {
            color: black;
            padding-bottom: 45px;
            border-bottom: 5px solid red;
          }
      }

      li {
        padding: 15px;
      }

    
`