import React, { Component } from "react";
import $ from "jquery";
//import "./portfolio.css";

function Portfolio({ selectPage }) {
  return (
    <>
      <div>포트폴리오 {selectPage}</div>
      <div className="portfolio__section">
        <img src="./img/cinque.jpg" alt="Sumbnail" className="portfolio__sectionSumbnail" />
        <div className="portfolio__sectionTitle">암튼 프로젝트 명</div>
        <div className="portfolio__sectionDate">프로젝트 기간</div>
        <div className="portfolio__sectionDescription">사용기술 등 설명</div>
        <div className="portfolio__sectionLink">깃허브 등 링크랑 아이콘</div>
      </div>
    </>
  );
}
export default Portfolio;
