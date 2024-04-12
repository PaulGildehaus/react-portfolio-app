import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className="py-8" id="aboutme">
        <div className="container m-auto px-4">
          <h2 className="section-head">About Me</h2>
          <div className="about relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-gray-500">
            <div className='mt-8'>
              <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
              <p>
                Graduated RIT with a BS in Software Engineering, an immersion in 
                Digital Literature & Comparative Media, and over 52 weeks of 
                real-world development experience. Started full-time position at More Vang.
              </p>
            </div>
            <div className='mt-20'>
              <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
              <p>
                Hired at More Vang as a co-op in Alexandria, VA. Worked mainly 
                remote due to the pandemic, thus displaying my remote capabilities. 
                Continued remote work throughout my final year at university. Offered a 
                full-time role by December of 2020. 
              </p>
            </div>
            <div className='mt-20'>
              <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
              <p>
                Interviewed and hired by my first co-op/professional experience 
                at the CRM company Gimmal. Worked for 8 months as a software 
                development intern and software quality assurance engineer.
              </p>
            </div>
            <div className='mt-20'>
              <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
              <p>
                Enrolled in Rochester Institute of Technology for Software 
                Engineering and moved to Rochester.
              </p>
            </div>
            <div className='mt-20'>
              <h3 className="absolute left-0 text-lg font-semibold">&lt;2016</h3>
              <p>
                Grew up in St. Louis, while spending half my time out in nature 
                on farmland in rural Missouri. Teaching me valuable practical 
                skills from helping on a farm.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
