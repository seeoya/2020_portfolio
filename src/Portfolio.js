import React, { Component } from "react";

const settings = {
  className: "portfolio__slider",
  fade: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

function Portfolio({ selectPage }) {
  const sectionList = [
    {
      id: 1,
      img: ["./img/p5-main.png"],
      title: "홈 쉐어링 서비스 Project P5",
      date: "2020. 02. 24 ~ 2020. 03. 20",
      set: ["5인, 기획·퍼블리싱·프론트 엔드 담당", "HTML, CSS, Javascript, Jquery", "(+Java, JSP, Ajax, Spring Framework, AWS)"],
      desc: [
        "KG ITBANK의 '반응형 JAVA 웹 개발자' 과정 중 개발한 5인의 웹 프로젝트.",
        "JAVA 및 JSP, Spring Framework, AWS를 이용하여 백 엔드를, HTML와 CSS, Javascript, Jquery를 이용하여 프론트 엔드를 구성했다.",
        "Ajax를 이용한 비동기적 통신과 반응형이 구현되어 있으며, 페이지 중 헤더와 게시글 페이지, 회원정보 등의 페이지와 반응형 프론트 엔드 구현을 담당했다."
      ],
      gitLink: "https://github.com/seeoya/2020-Project-P5",
      siteLink: "./p5.html"
    },
    {
      id: 2,
      img: ["./img/abst-main.png"],
      title: "ABSTRACT",
      date: "2020. 07. 15 ~ 2020. 07. 20",
      set: ["1인, 기획·퍼블리싱·프론트 엔드 담당", "HTML, CSS, Javascript, Jquery"],
      desc: [
        "퍼블리싱과 Javascript 테스트를 위해 개발한 원 페이지로 구성된 웹 페이지.",
        "상단 슬라이드는 라이브러리가 아닌 JS, JQuery만을 사용해 제작하였으며, 헤더를 포함한 전체 페이지가 3단 반응형 구조로 구성되어 있다.",
        "카카오 지도 API를 이용해 지도를 구현하였고, 창 사이즈와 지도 크기가 변경되더라도 설정된 부분이 중앙으로 유지되도록 설정했다."
      ],
      gitLink: "https://github.com/seeoya/2020-practice",
      siteLink: "https://seeoya.github.io/2020-practice"
    },
    {
      id: 3,
      img: ["./img/2020-portfolio-main.png"],
      title: "2020 Portfolio",
      date: "2020. 02. 24 ~ 2020. 03. 20",
      set: ["1인, 개발 기획·퍼블리싱·프론트 엔드 담당", "HTML, CSS, Javascript, React"],
      desc: [
        "본 2020 포트폴리오 웹 페이지이다.",
        "React를 이용하여 원 페이지로 구성된 웹 페이지이며, 별도의 DB 연결은 하지 않았다. 슬라이드 구성을 위한 slick 라이브러리와 구글 폰트를 이용했다.",
        "HTML, CSS, JAVASCRIPT, REACT만을 이용한 프론트엔드 개발 페이지."
      ],
      gitLink: "https://github.com/seeoya/2020-portfolio",
      siteLink: "http://seeoya.dothome.co.kr/"
    }
  ];

  return (
    <div class="portfolio">
      <div className="portfolio__sectionList">
        {sectionList.reverse().map((i) => (
          <PortfolioSection key={i.id} img={i.img} title={i.title} date={i.date} set={i.set} desc={i.desc} gitLink={i.gitLink} siteLink={i.siteLink} />
        ))}
      </div>
    </div>
  );
}

function PortfolioSection({ key, img, title, date, set, desc, gitLink, siteLink }) {
  return (
    <div className="portfolio__section" key={key}>
      {setImg(img, title, siteLink)}
      <div className="portfolio__sectionTitle">{title}</div>
      <div className="portfolio__sectionDate">{date}</div>
      <div className="portfolio__sectionSet">{setSet(set)}</div>
      <div className="portfolio__sectionDesc">{setDesc(desc)}</div>
      <div className="portfolio__sectionLink">
        {setGitLink(gitLink)}
        {setSiteLink(siteLink)}
      </div>
    </div>
  );
}

function setImg(img, title, siteLink) {
  var re = [];
  for (let index = 0; index < img.length; index++) {
    re.push(
      <div>
        <a href={siteLink} target="_blank">
          <img src={img[index]} alt={title} className="portfolio__sectionSumbnail" />
        </a>
      </div>
    );
  }
  return re;
}

function setSet(set) {
  var re = [];
  for (let index = 0; index < set.length; index++) {
    if (index == 0) {
      re.push(<p>{set[index]}</p>);
    } else {
      re.push(<p>{set[index]}</p>);
    }
  }
  return re;
}

function setDesc(desc) {
  var re = [];
  for (let index = 0; index < desc.length; index++) {
    re.push(<p>{desc[index]}</p>);
  }
  return re;
}

function setGitLink(gitLink) {
  if (gitLink != null && gitLink != "") {
    return (
      <a href={gitLink} target="_blank">
        <i class="fab fa-github-square fa-2x" title="깃허브로 이동"></i>
      </a>
    );
  }
  return;
}

function setSiteLink(siteLink) {
  if (siteLink != null && siteLink != "") {
    return (
      <a href={siteLink} target="_blank">
        <i class="fas fa-share-square fa-2x" title="자세히 보기"></i>
      </a>
    );
  }
  return;
}
export default Portfolio;
