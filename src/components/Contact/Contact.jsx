import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f4fadbb-004a-4c8d-8880-8db0417bbd6c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <i className="fa-regular fa-message"></i> </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat perferendis porro pariatur ab necessitatibus eum doloribus vel sequi autem. Vel doloremque explicabo fugit aut velit temporibus mollitia itaque quibusdam distinctio?</p>
            <ul>
                <li> <i className="fa-solid fa-envelope mail"></i> mily.carter.travel@gmail.com</li>
                <li> <i className="fa-solid fa-phone phone"></i> +44 7911 123456</li>
                <li> <i className="fa-solid fa-location-dot adrs"></i> 17 Seaview Crescent, Brighton BN1 4AA, United Kingdom</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows={6} placeholder='Enter youe message' required></textarea>
            <button type='submit' className='btn'>Submit Your form <i className="fa-solid fa-arrow-right"></i> </button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact