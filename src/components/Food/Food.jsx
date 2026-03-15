import React from 'react'
import './Food.css'
import food_1 from '../../assets/food1.avif'
import food_2 from '../../assets/food2.avif'
import food_3 from '../../assets/food3.avif'
import food_4 from '../../assets/food4.avif'

const Food = () => {
  return (
    <div className='Beach-Food'>
        <div className="food">
            <img src={food_1} alt="" />
            <img src={food_2} alt="" />
            <img src={food_3} alt="" />
            <img src={food_4} alt="" />
        </div>
        <button className='btn'>See more here <i className="fa-solid fa-arrow-right"></i> </button>
    </div>
  )
}

export default Food