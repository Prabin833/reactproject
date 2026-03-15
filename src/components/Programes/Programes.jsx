import React from 'react'
import './Programes.css'
import beach_1 from '../../assets/beach-1.jpg'
import beach_2 from '../../assets/beach-2.jpg'
import beach_3 from '../../assets/beach-3.jpg'

const Programes = () => {
  return (
    <div className='Programes'>
        <div className="Programe">
            <img src={beach_1} alt="" />
            <div className="caption">
                <i className="fa-solid fa-umbrella-beach"></i>
                <p>Ka’anapali Beach</p>
            </div>
        </div>
        <div className="Programe">
            <img src={beach_2} alt="" />
            <div className="caption">
                <i className="fa-solid fa-umbrella-beach"></i>
                <p>Whitehaven Beach</p>
            </div>
        </div>
        <div className="Programe">
            <img src={beach_3} alt="" />
            <div className="caption">
                <i className="fa-solid fa-umbrella-beach"></i>
                <p>Navagio Beach</p>
            </div>
        </div>
    </div>
  )
}

export default Programes