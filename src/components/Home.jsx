import React,{useState} from 'react'
import SingleProduct from './SingleProduct'
import "./styles.css"
const Home = () => {
    // const productsArray=[...Array(20)].map(()=>({
    //     id:faker.datatype.uuid(),
    //     name:faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     image: faker.random.image(),
    // }))
    // console.log(productsArray);
    const productsArray=[
        {
            "id":"1",
            "name" :"Aniket",
            "price":"10000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Rhodie",
            "price":"10000",
            "image":"http://dummyimage.com/114x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Jerry",
            "price":"10000",
            "image":"http://dummyimage.com/183x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Harsh",
            "price":"10000",
            "image":"http://dummyimage.com/247x100.png/5fa2dd/ffffff"
        },
        {
            "id":"1",
            "name" :"Anup",
            "price":"10000",
            "image":"http://dummyimage.com/220x100.png/5fa2dd/ffffff"
        },
        {
            "id":"1",
            "name" :"Harsh",
            "price":"10000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Tejesh",
            "price":"10000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Harshit",
            "price":"15000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000"
        },
        {
            "id":"1",
            "name" :"Aman",
            "price":"20000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000"
        },

    ]

    const [products]=useState(productsArray)


  return (
    <div className='productContainer'>
        {products.map((prod)=>(
           
            // <span>{prod.name}</span>
            <SingleProduct prod={prod}/>
        ))}

    </div>
  )
}

export default Home