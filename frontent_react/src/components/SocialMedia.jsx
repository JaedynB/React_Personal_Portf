import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.linkedin.com/in/jaedyn-brown/';
          }}>
            <BsLinkedin />
          </button>
        </div>
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='https://github.com/JaedynB';
          }}>
            <BsGithub />
          </button>
        </div>
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.instagram.com/jaeddog/';
          }}>
            <BsInstagram />
          </button>
        </div>
    </div>
  )
};

export default SocialMedia;