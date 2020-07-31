import React, { Component } from "react";
import $ from "jquery";

function Portfolio({ selectPage }) {
  const sectionList = [
    {
      id: 1,
      img: "./img/cinque.jpg",
      title: "1번 타이틀",
      date: "2020. 00. 00 ~ 2020. 00. 00",
      desc:
        "국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.",
      link: "asd"
    },
    {
      id: 2,
      img: "./img/hungarian.jpg",
      title: "2번 타이틀",
      date: "2020. 00. 00 ~ 2020. 00. 00",
      desc: "근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.",
      link: "asdd"
    },
    {
      id: 3,
      img: "./img/lobby.jpg",
      title: "3번 타이틀",
      date: "2020. 00. 00 ~ 2020. 00. 22",
      desc:
        "대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.",
      link: "ㅁㄴㅇ"
    }
  ];

  return (
    <div class="portfolio">
      <h1 className="portfolio__title">PORTFOLIO {selectPage}</h1>
      <div className="portfolio__sectionList">
        {sectionList.map((i) => (
          <PortfolioSection key={i.id} img={i.img} title={i.title} date={i.date} desc={i.desc} link={i.link} />
        ))}
        {sectionList.map((i) => (
          <PortfolioSection key={i.id} img={i.img} title={i.title} date={i.date} desc={i.desc} link={i.link} />
        ))}
        {sectionList.map((i) => (
          <PortfolioSection key={i.id} img={i.img} title={i.title} date={i.date} desc={i.desc} link={i.link} />
        ))}
      </div>
    </div>
  );
}

function PortfolioSection({ key, img, title, date, desc, link }) {
  return (
    <div className="portfolio__section">
      <img src={img} alt={title} className="portfolio__sectionSumbnail" />
      <div className="portfolio__sectionTitle">{title}</div>
      <div className="portfolio__sectionDate">{date}</div>
      <div className="portfolio__sectionDescription">{desc}</div>
      <div className="portfolio__sectionLink">{link}</div>
    </div>
  );
}

export default Portfolio;
