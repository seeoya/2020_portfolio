import React, { Component } from "react";
import $ from "jquery";
//import "./contact.css";

function Contact({ selectPage }) {
  return (
    <>
      <div>연락 {selectPage}</div>
      <div>로고</div>
      <div>이름</div>
      <div>연락처</div>
      <div>이메일</div>
    </>
  );
}

export default Contact;
