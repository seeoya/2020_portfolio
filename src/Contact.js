import React, { Component } from "react";
import $ from "jquery";

function Contact({ selectPage }) {
  return (
    <div className="contact">
      <div className="contact__name">
        It's Me, Hailey.
        <br />
        See Ya Soon.
      </div>
      <div>
        <a href="mailto:seeoya@naver.com" target="_blank" className="contact__anchor" title="Mail to Me">
          <span>
            <object type="image/svg+xml" data="img/email.svg" alt="email" className="contact__icon"></object>
          </span>
        </a>
        <a href="https://github.com/seeoya" target="_blank" className="contact__anchor">
          <object type="image/svg+xml" data="img/github.svg" alt="github" className="contact__icon"></object>
        </a>
        <a href="https://open.kakao.com/o/s1q8zhrc" target="_blank" className="contact__anchor">
          <object type="image/svg+xml" data="img/kakao-talk.svg" alt="kakaotalk" className="contact__icon"></object>
        </a>
      </div>
    </div>
  );
}

export default Contact;
