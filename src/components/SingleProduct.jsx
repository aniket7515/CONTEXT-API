import React from 'react'
import "./styles.css"
const SingleProduct = ({prod,cart,setCart}) => {
    // console.log(cart);
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name}/>
        <div className="productDesc">
            <span style={{fontWeight:700}}>{prod.name}</span>
            <span>Rs {prod.price.substring(0,3)}</span>
        </div>

        {cart.includes(prod)?(
            <button className='add' onClick={()=>{
                setCart(cart.filter((c)=> c.id !==prod.id))
            }}>Remove from Cart</button>
        ):(
            <button className='add' onClick={()=>{
                setCart([...cart,prod])
            }}>Add to Cart</button>

        )}

        
        

    </div>
  )
}

export default SingleProduct