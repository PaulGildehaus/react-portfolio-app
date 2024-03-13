import React, { Component } from 'react'
import Project1 from "../assets/project1.png";
import Automation from "../assets/icons8-automation-96.png";
import DataProcessing from "../assets/icons8-data-processing-96.png";
import SoftwareEngineering from "../assets/icons8-software-development-96.png";

export default class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className='text-2xl font-semibold'>Services</h2>
          <div className="flex flex-col sm:flex-row gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <a href='https://en.wikipedia.org/wiki/Building_automation'><img src={Automation} className="m-auto w-auto h-auto" /></a>
              <h3 className='text-2xl font-semibold text-center mt-8'>Automated System Design</h3>
              <p className='text-gray-400 text-center text-sm mt-2'>
                Through two different job positions involving the creation 
                of automated client workflows and testing, I have 
                accumulated a wealth of knowledge in the BAS sphere. 
                Designing and implementing multi-step, complex production 
                job automations to mitigate the tedium of daily employee 
                work has become a special interest of mine.
              </p>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <a href='https://www.talend.com/resources/what-is-data-processing/'><img src={DataProcessing} className="m-auto w-auto h-auto" /></a>
              <h3 className='text-2xl font-semibold text-center mt-8'>Data Processing Optimization</h3>
              <p className='text-gray-400 text-center text-sm mt-2'>
                Manipulating massive datasets has been a key part of my 
                professional work. From the creation and seeding of millions 
                of custom data points to databases, to converting thousands 
                of XML/JSON/CSV/Spreedsheet formatted data files into numerous 
                other formats for production use, I have significant experience 
                and a unique insight into this unique part of the tech industry.
              </p>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <a href='https://www.d.umn.edu/~gshute/softeng/principles.html'><img src={SoftwareEngineering} className="m-auto w-auto h-auto" /></a>
              <h3 className='text-2xl font-semibold text-center mt-8'>Software Engineering</h3>
              <p className='text-gray-400 text-center text-sm mt-2'>
                Through my education at RIT and 
                my professional experiences, I have amassed a deep 
                understanding of the fundamental principles and practices of
                 software engineering. From utilizing design patterns 
                and principles such as SOLID in code architecture, as well as 
                employing development methodologies from Waterfall to Scrum 
                (Plan-driven to Agile), I feel qualified to say I am a Software 
                Engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
