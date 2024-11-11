import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Sidebar from '../Components/Sidebar'
import { createSlice } from '@reduxjs/toolkit';

const Basket = () => {
  const basket = useSelector((state) => state.basket.value)
  console.log(basket);
  return (
    <>
      <div className='basket'>
        <div className="container">
          <h2 className="basket_title">Basket</h2>
          <div className="basket_box">
            {basket?.map(product => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket