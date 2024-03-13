import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <section>
        <div className='container m-auto px-4 py-14'>
        <h2 className='text-2xl font-semibold'>Additional Technologies and Skills</h2>
          <div className='flex justify-between mt-4 w-full skills'>
            <p>VBScript</p>
            <p>Java</p>
            <p>C#</p>
            <p>C</p>
            <p>Node.js</p>
            <p>.NET</p>
            <p>Laravel</p>
          </div>

          <div className='flex justify-between mt-4 w-full skills'>
            <p>Git</p>
            <p>Scrum</p>
            <p>Waterfall</p>
            <p>AWS</p>
            <p>Docker</p>
            <p>FFmpeg</p>
            <p>Vagrant</p>
          </div>
        </div>
      </section>
    )
  }
}
