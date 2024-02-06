import { useState } from 'react'
import Card from './card'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="topnav">
            <div className="text">Official Website of MYJ Football</div>
            <div className="contactUS">
              <div className="follow">
                <h6>Follow Us :</h6>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="contact">
                <h6>Contact Us</h6>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </div>
        </div>
      </div>
      <Card/>
    </>
  )
}

export default App
