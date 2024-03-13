import React, { Component } from 'react'
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Github from "../assets/github-mark-white.svg";

export default class Technologies extends Component {
  render() {
    return (
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Copyright @ 2024 Paul Gildehaus</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <h2 className='font-semibold'>Contact Me:</h2>
            <li>
              <a href='https://www.linkedin.com/in/paulgildehausiv/' target='_blank' rel="noopener noreferrer">
                <img src={LinkedIn} className="w-6" />
              </a>
            </li>
            <li>
              <a href='https://github.com/PaulGildehaus' target='_blank' rel="noopener noreferrer">
                <img src={Github} className="w-6" />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/paul.gildehaus' target='_blank' rel="noopener noreferrer">
                <img src={Facebook} className="w-6" />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/pegildehaus/' target='_blank' rel="noopener noreferrer">
                <img src={Instagram} className="w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
