import product1 from './image-product-1.jpg';
import product2 from './image-product-2.jpg';
import product3 from './image-product-3.jpg';
import product4 from './image-product-4.jpg';



export const product = [product1, product2, product3, product4];
export const productByIndex = (index: number) => product[index % product.length];

