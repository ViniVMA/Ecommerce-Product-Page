import styled, { css } from 'styled-components';
import Modal from 'react-modal'




export const GalleryContainer= styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    grid-gap: 30px;

    img {
      max-width: 400px;
      border-radius: 20px;
      cursor: pointer;

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

export const FullscreenGallery = styled(Modal)`
    display: block;
    margin: 250px auto;    
    grid-template-rows: 2fr;
    grid-gap: 30px;
    max-width: 400px;

    img {
      max-width: 400px;
      border-radius: 20px;
      cursor: pointer;

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


