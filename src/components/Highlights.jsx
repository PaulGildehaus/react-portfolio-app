import React, { Component } from 'react'

export default class Highlights extends Component {
  render() {
    return (
      <section id="highlights" className='anchor mb-12'>
        <div className="container m-auto px-4 sm:py-12">
          <h2 className='text-2xl font-semibold'>Career Highlights</h2>
          <div className="sm:flex-row gap-10 mt-11">
            <div className="resume-item mb-4">
              <span className="date"> June 2021 - February 2024 </span>
              <h3 className='text-2xl font-semibold mt-8'>CLI Engineering</h3>
              <p className='text-gray-400 text-sm mt-2'>
                Modified and improved the functionality of a powerful, PDFkit based, 
                inhouse CLI tool for the fully customizable creation of any type of 
                PDF, including PDF/UA (Universal Accessibility), opening the door 
                for thousands of potential client requests. Designed and implemented 
                element and positional measurement algorithms into the CLI and utilized 
                it for the creation of a repository with over 300 modular and reusable 
                PDF templates, each customized for different client needs.
              </p>
              <span className="school">Mythos</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date"> January 2020 - February 2024 </span>
              <h3 className='text-2xl font-semibold mt-8'>Software Automation & Data Processing</h3>
              <p className='text-gray-400 text-sm mt-2'>
                Designed and implemented complex automated workflows for various 
                client requests. Through the use of process automation tools, such 
                as CRON, PlanetPress, and various scripting languages, I created and 
                maintained hundreds of live, production, automated client jobs. This 
                resulted in a drop of +90% of manual employee interaction with these 
                client jobs, thus leading to significantly fewer human mistakes.
              </p>
              <span className="school">More Vang</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date"> January 2022 - February 2024 </span>
              <h3 className='text-2xl font-semibold mt-8'>API Design and Development</h3>
              <p className='text-gray-400 text-sm mt-2'>
                Updated, refactored, and maintained a complex REST API system with a 
                set of request/response conditions coined as the "rules-engine". This 
                API gateway would receive tens of thousands of unique requests each 
                day and each request would be provided a custom generated response.
              </p>
              <span className="school">More Vang</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date"> May 2018 - December 2018 </span>
              <h3 className='text-2xl font-semibold mt-8'>Software Quality Assurance Engineering</h3>
              <p className='text-gray-400 text-sm mt-2'>
                Created and implemented hundreds of tests for one of Gimmal's 
                information governance tool. This included manual GUI, automated GUI, 
                and API test that all together caught hundreds of bugs and memory leaks. 
                In addition, I created, from scratch, a SharePoint database seeding 
                program that allowed for the mocking of millions of customizable files 
                quickly using .NET parallel processing. In the end, these efforts 
                resulted in high test coverage, increased software security, and full 
                regression/smoke testing.
              </p>
              <span className="school">Gimmal</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
