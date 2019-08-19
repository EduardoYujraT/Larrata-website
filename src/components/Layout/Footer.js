import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="main-footer">
      <div className="footer-middle">
        <div className="container">

          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
