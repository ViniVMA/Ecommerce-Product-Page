import product1 from '/assets/images/image-product-1.jpg'
import product2 from '/assets/images/image-product-2.jpg'
import product3 from '/assets/images/image-product-3.jpg'
import product4 from '/assets/images/image-product-4.jpg'


interface Sneakers {
  [index: number]: {
    name: string;
    description: string;
    price: number;
    images: string;
  }
}

export const Sneakers = {
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.00,
    discount: 50,
    images: product1,
  }



  export const ProductImages = [
    {
      image: product1
    },
    {
      image: product2
    },
    {
      image: product3
    },
    {
      image: product4
    },
      
  ]