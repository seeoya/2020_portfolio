import React, { Component } from "react";
import $ from "jquery";
//import "./profile.css"

function Profile({ selectPage }) {
  return (
    <>
      <div>프로필 {selectPage}</div>
      <div>(암튼 프로필 이름 전화번호 이메일 깃허브)</div>
      <div>(암튼 보유 기술 자격증)</div>
      <div>(암튼 경력)</div>
    </>
  );
}

export default Profile;
