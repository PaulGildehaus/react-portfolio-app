import React, { Component } from 'react'
import Profile from "../assets/profile_picture.png";

export default class Bio extends Component {
  render() {
    return (
      <section>
        <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
            <h2 className='font-bold text-4xl'>Hello, I am Paul Gildehaus</h2>
            <div>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">Software Engineer</h2>
            </div>
            <div>
              <p className='mt-4 text-gray-400'>
                Backend developer with 4+ years of professional experience in software development, 
                process management, and automation. Along with expertise <br />in data process 
                optimization and real-time pipeline support.
              </p>
              <button className="px-8 shadow-gray-500 text-gray-600 font-semibold shadow-md py-5 mt-5 bg-gradient-to-t from-yellow-200 rounded-full to-lime-400 hover:from-yellow-200 hover:to-lime-600">
                Download resume
              </button>
            </div>
          </div>
          <div className='relative'>
            <a href='https://www.linkedin.com/in/paulgildehausiv/' target='_blank' rel="noopener noreferrer"><img src={Profile} className="relative z-10 w-[280px] m-auto sm:w-[600px] profile-image" /></a>
          </div>
        </div>
      </section>
    )
  }
}
