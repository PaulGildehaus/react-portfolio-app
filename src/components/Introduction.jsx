import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className='font-bold text-2xl'>Paul's Portfolio</h1>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white cursor-pointer">Services</a>
              </li>
              <li>
                <a href="#highlights" className="text-gray-400 hover:text-white cursor-pointer">Highlights</a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">Technologies</a>
              </li>
              <li>
                <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">About me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
