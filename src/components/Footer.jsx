import React, { Component } from 'react'
import FacebookIcon from "../assets/facebook.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import TiktokIcon from "../assets/tiktok.svg";
import GithubIcon from "../assets/github-mark-white.svg";
import {linkedinURL, githubURL, tiktokURL, instagramURL, facebookURL} from "../assets/links.json";

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
              <a href={linkedinURL} target='_blank' rel="noopener noreferrer">
                <img src={LinkedInIcon} className="w-6" />
              </a>
            </li>
            <li>
              <a href={githubURL} target='_blank' rel="noopener noreferrer">
                <img src={GithubIcon} className="w-6" />
              </a>
            </li>
            <li>
              <a href={instagramURL} target='_blank' rel="noopener noreferrer">
                <img src={InstagramIcon} className="w-6" />
              </a>
            </li>
            <li>
              <a href={tiktokURL} target='_blank' rel="noopener noreferrer">
                <img src={TiktokIcon} className="w-6" />
              </a>
            </li>
            <li>
              <a href={facebookURL} target='_blank' rel="noopener noreferrer">
                <img src={FacebookIcon} className="w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
