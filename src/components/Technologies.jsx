import React, { Component } from 'react'

export default class Technologies extends Component {
  render() {
    return (
      <section id="technologies">
        <div className='container m-auto px-4'>
        <h2 className='section-head'>Technologies</h2>
          <div className='mt-6'>
            <div>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Python</h2>
                <p className='text-gray-500'>Proficient</p>
              </div>
              <span className='w-full technologies' />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Javascript</h2>
                <p className='text-gray-500'>Proficient</p>
              </div>
              <span className='w-full technologies' />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>BAS (Building Automated Systems)</h2>
                <p className='text-gray-500'>Proficient</p>
              </div>
              <span className='w-full technologies' />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>OOP (Object-oriented Programming)</h2>
                <p className='text-gray-500'>Advanced</p>
              </div>
              <span className='w-[85%] technologies' />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>SQL</h2>
                <p className='text-gray-500'>Advanced</p>
              </div>
              <span className='w-[75%] technologies' />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>PHP</h2>
                <p className='text-gray-500'>Competent</p>
              </div>
              <span className='w-[65%] technologies' />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
