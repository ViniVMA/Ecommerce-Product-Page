import styled from 'styled-components';



export const GalleryContainer= styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    grid-gap: 30px;

    img {
      max-width: 400px;
      border-radius: 20px;

    }

    .selected {
      
    }

    .imageContainer {
      grid-row: 2;
      display: flex;
      
      
      
    }

    .imageThumb {
      max-width: 100px;
      padding: 0 5px;
    }

    .imageContainer:nth-child(1){
     grid-column: 4;

    }
`