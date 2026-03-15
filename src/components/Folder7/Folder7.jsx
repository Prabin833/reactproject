import React, { useRef } from "react";
import "./Folder7.css";
import person_1 from "../../assets/person1.jpg";
import person_2 from "../../assets/person3.jpg";
import person_3 from "../../assets/person2.jpg";
import person_4 from "../../assets/person4.jpg";

const Folder7 = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="slider-div">
      <i className="fa-solid fa-left-long back-btn" onClick={slideBackward}></i>
      <i className="fa-solid fa-right-long next-btn" onClick={slideForward}></i>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="visitors-info">
                <img src={person_1} alt="" />
                <div>
                  <h3>Emily Carter</h3>
                  <span>24, from Sydney,</span>
                </div>
              </div>
              <p>
                had a refreshing solo trip to Bondi Beach in Australia — she
                loved the early morning surf, chilled with locals at the
                beachside cafés, and watched the golden sunset with a coconut
                smoothie in hand.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="visitors-info">
                <img src={person_2} alt="" />
                <div>
                  <h3>Liam Thompson</h3>
                  <span>28, from Manchester,</span>
                </div>
              </div>
              <p>
                went to Copacabana Beach in Rio de Janeiro with his cousins —
                the music, the street food, and the wild samba dancing on the
                sand made it one of the most energetic and unforgettable nights
                of his life.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="visitors-info">
                <img src={person_3} alt="" />
                <div>
                  <h3>Sofia Martinez</h3>
                  <span>31, from Buenos Aires,</span>
                </div>
              </div>
              <p>
                visited Barceloneta Beach in Spain — she spent the afternoon
                sunbathing, tried paddleboarding for the first time, and ended
                the day eating fresh tapas at a beachside restaurant while
                watching street performers.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="visitors-info">
                <img src={person_4} alt="" />
                <div>
                  <h3>Noah Kim</h3>
                  <span>22, from Seoul,</span>
                </div>
              </div>
              <p>
                had a peaceful weekend at Whitehaven Beach in Australia — the
                bright white sand and turquoise water blew his mind, and a quiet
                boat ride along the shore gave him the break he didn’t know he
                needed.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Folder7;
