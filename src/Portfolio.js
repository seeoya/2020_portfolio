import React, { Component } from "react";
import $ from "jquery";

function Portfolio({ selectPage }) {
  const sectionList = [
    {
      id: 1,
      img: ["./img/cinque.jpg"],
      title: "홈 쉐어링 서비스 Project P5",
      date: "2020. 02. 24 ~ 2020. 03. 20",
      set: ["5인, 개발 기획 및 프론트 엔드 담당", "HTML, CSS, Javascript, Jquery", "(+Java, JSP, Ajax)"],
      desc: [
        "Home sharing 서비스에서 Host는 부수입을 창출할 수 있으며, 새로운 사람들을 만나고, 그들이 문화를 경험하는 순간을 함께할 수도 있습니다. 독립한 자녀들의 빈자리를 채우는 등, 심적 수입도 얻을 수 있습니다.",
        "그리고 Guest 역시 평소의 여행보다 더 깊은 문화를 체험할 수 있으며 그로 인한 색다른 여행 경험이 될 수 있습니다.",
        "P5는 Home sharing을 중개하는 역할의 서비스 웹으로 누구나 Host, Guest가 될 수 있습니다."
      ],
      gitLink: "fff",
      siteLink: "asdd"
    },
    {
      id: 1,
      img: ["./img/cinque.jpg"],
      title: "홈 쉐어링 서비스 Project P5",
      date: "2020. 02. 24 ~ 2020. 03. 20",
      set: ["5인, 개발 기획 및 프론트 엔드 담당", "HTML, CSS, Javascript, Jquery", "(+Java, JSP, Ajax)"],
      desc: [
        "Home sharing 서비스에서 Host는 부수입을 창출할 수 있으며, 새로운 사람들을 만나고, 그들이 문화를 경험하는 순간을 함께할 수도 있습니다. 독립한 자녀들의 빈자리를 채우는 등, 심적 수입도 얻을 수 있습니다.",
        "그리고 Guest 역시 평소의 여행보다 더 깊은 문화를 체험할 수 있으며 그로 인한 색다른 여행 경험이 될 수 있습니다.",
        "P5는 Home sharing을 중개하는 역할의 서비스 웹으로 누구나 Host, Guest가 될 수 있습니다."
      ],
      gitLink: "fff",
      siteLink: "asdd"
    },
    {
      id: 1,
      img: ["./img/cinque.jpg"],
      title: "홈 쉐어링 서비스 Project P5",
      date: "2020. 02. 24 ~ 2020. 03. 20",
      set: ["5인, 개발 기획 및 프론트 엔드 담당", "HTML, CSS, Javascript, Jquery", "(+Java, JSP, Ajax)"],
      desc: [
        "Home sharing 서비스에서 Host는 부수입을 창출할 수 있으며, 새로운 사람들을 만나고, 그들이 문화를 경험하는 순간을 함께할 수도 있습니다. 독립한 자녀들의 빈자리를 채우는 등, 심적 수입도 얻을 수 있습니다.",
        "그리고 Guest 역시 평소의 여행보다 더 깊은 문화를 체험할 수 있으며 그로 인한 색다른 여행 경험이 될 수 있습니다.",
        "P5는 Home sharing을 중개하는 역할의 서비스 웹으로 누구나 Host, Guest가 될 수 있습니다."
      ],
      gitLink: "fff",
      siteLink: "asdd"
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
      {setImg(img, title)}
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

function setImg(img, title) {
  var re = [];
  for (let index = 0; index < img.length; index++) {
    re.push(<img src={img[index]} alt={title} className="portfolio__sectionSumbnail" />);
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
      <a href={gitLink}>
        <i class="fab fa-github-square fa-2x"></i>
      </a>
    );
  }
  return;
}

function setSiteLink(siteLink) {
  if (siteLink != null && siteLink != "") {
    return (
      <a href={siteLink}>
        <i class="fas fa-share-square fa-2x"></i>
      </a>
    );
  }
  return;
}
export default Portfolio;
