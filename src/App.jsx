import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programes from './components/Programes/Programes'
import Title from './components/Title/Title'
import About from './components/About/About'
import Food from './components/Food/Food'
import Folder7 from './components/Folder7/Folder7'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/Video/Video'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle= 'beautiful beaches' title= 'best beaches in the world' />
      <Programes />
      <About setPlayState={setPlayState} />
      <Title subTitle= 'Beach restaurant' title= 'Amazing foods' />
      <Food />
      <Title subTitle='Warm welcome' title='Happy visitors' />
      <Folder7 />
      <Title subTitle='CONTACT US' title='Get in touch' />
      <Contact />
      <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App