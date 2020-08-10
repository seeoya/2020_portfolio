import React, { Component } from "react";
import $ from "jquery";

function Profile({ selectPage }) {
  const skillList = [
    //theme: 1(Front) 2(back) 3(media) 4(else)
    {
      id: 1,
      theme: 1,
      name: "HTML5",
      icon: "./img/html5.svg",
      level: 4
    },
    {
      id: 2,
      theme: 1,
      name: "CSS3",
      icon: "./img/css3.svg",
      level: 4
    },
    {
      id: 3,
      theme: 1,
      name: "JAVASCRIPT",
      icon: "./img/javascript.svg",
      level: 4
    },
    {
      id: 4,
      theme: 1,
      name: "JQUERY",
      icon: "./img/jquery.png",
      level: 3
    },
    {
      id: 5,
      theme: 2,
      name: "JAVA&JSP",
      icon: "./img/java.svg",
      level: 2
    },
    {
      id: 6,
      theme: 1,
      name: "REACT",
      icon: "./img/react.svg",
      level: 1
    },
    {
      id: 7,
      theme: 3,
      name: "PHOTOSHOP",
      icon: "./img/photoshop.svg",
      level: 4
    },
    {
      id: 8,
      theme: 4,
      name: "GITHUB",
      icon: "./img/github.svg",
      level: 2
    },
    {
      id: 9,
      theme: 4,
      name: "EXCEL",
      icon: "./img/excel.svg",
      level: 3
    },
    {
      id: 10,
      theme: 4,
      name: "POWERPOINT",
      icon: "./img/powerpoint.svg",
      level: 4
    },
    {
      id: 11,
      theme: 2,
      name: "ORACLE DB",
      icon: "./img/database1.svg",
      level: 2
    },
    {
      id: 12,
      theme: 2,
      name: "MY-SQL",
      icon: "./img/database2.svg",
      level: 1
    },
    {
      id: 13,
      theme: 3,
      name: "AUDITION",
      icon: "./img/audition.svg",
      level: 3
    },
    {
      id: 14,
      theme: 3,
      name: "AFTER EFFECTS",
      icon: "./img/after-effects.svg",
      level: 3
    },
    {
      id: 15,
      theme: 4,
      name: "WORD",
      icon: "./img/word.svg",
      level: 4
    },
    {
      id: 16,
      theme: 1,
      name: "Vue",
      icon: "./img/vue.svg",
      level: 0
    },
    {
      id: 17,
      theme: 1,
      name: "ANGULAR",
      icon: "./img/angular.svg",
      level: 0
    }
  ];

  const educationList = [
    {
      id: 1,
      date: "2012. 03 ~ 2015. 02",
      name: "인창고등학교",
      depart: "-",
      state: "졸업"
    },
    {
      id: 2,
      date: "2016. 03 ~ 2019. 02",
      name: "서경대학교",
      depart: "미용학",
      state: "졸업"
    },
    {
      id: 3,
      date: "2019. 07 ~ 2019. 11",
      name: "KG ITBANK",
      depart: "Python 기초, C언어, JAVA, 네트워크 기초, JSP, 리눅스I",
      state: "이수"
    },
    {
      id: 4,
      date: "2019. 11 ~ 2020. 05",
      name: "KG ITBANK",
      depart: "반응형 JAVA 웹 개발자",
      state: "이수"
    },
    {
      id: 5,
      date: "2019. 07 ~ 2021. 02",
      name: "학점은행제",
      depart: "컴퓨터공학",
      state: "졸업예정"
    }
  ];

  const certificationList = [
    {
      id: 1,
      date: "2007. 04",
      name: "정보기술자격(ITQ) 아래한글",
      organization: "한국생산성본부(KPC)",
      state: "최종합격"
    },
    {
      id: 2,
      date: "2008. 12",
      name: "워드프로세서 1급",
      organization: "대한상공회의소",
      state: "최종합격"
    },
    {
      id: 3,
      date: "2018. 06",
      name: "컬러리스트 산업기사",
      organization: "한국산업인력공단",
      state: "최종합격"
    },
    {
      id: 4,
      date: "2020. 06",
      name: "정보처리기사",
      organization: "한국산업인력공단",
      state: "필기합격"
    }
  ];

  return (
    <div className="profile">
      <div className="profile__name">
        김 수 영<div class="profile__name--eng">Hailey KIM</div>
      </div>
      <div className="profile__skills">
        <h3>SKILL</h3>
        <div className="profile__skills--content">
          <div className="profile__skills--content1">
            {skillList
              .filter((it) => it.theme === 1)
              .map((i) => (
                <div class="profile__skills--icon">
                  <img src={i.icon} alt={i.name}></img>
                  <p>
                    {i.name}
                    <BatterySetting level={i.level} />
                  </p>
                </div>
              ))}
          </div>
          <div className="profile__skills--content2">
            {skillList
              .filter((it) => it.theme === 2)
              .map((i) => (
                <div class="profile__skills--icon">
                  <img src={i.icon} alt={i.name}></img>
                  <p>
                    {i.name}
                    <BatterySetting level={i.level} />
                  </p>
                </div>
              ))}
          </div>
          <div className="profile__skills--content3">
            {skillList
              .filter((it) => it.theme === 3)
              .map((i) => (
                <div class="profile__skills--icon">
                  <img src={i.icon} alt={i.name}></img>
                  <p>
                    {i.name}
                    <BatterySetting level={i.level} />
                  </p>
                </div>
              ))}
          </div>
          <div className="profile__skills--content4">
            {skillList
              .filter((it) => it.theme === 4)
              .map((i) => (
                <div class="profile__skills--icon">
                  <img src={i.icon} alt={i.name}></img>
                  <p>
                    {i.name}
                    <BatterySetting level={i.level} />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="profile__educations">
        <h3>EDUCATION</h3>
        <table>
          {educationList.reverse().map((i) => (
            <tr>
              <td>{i.date}</td>
              <td>{i.name}</td>
              <td>{i.depart}</td>
              <td>{i.state}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="profile__certifications">
        <h3>CERTIFICATION</h3>
        <table>
          {certificationList.reverse().map((i) => (
            <tr>
              <td>{i.date}</td>
              <td>{i.name}</td>
              <td>{i.organization}</td>
              <td>{i.state}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

function BatterySetting({ level }) {
  let battery = "./img/battery" + level + ".svg";
  let alt = "level" + level;
  let title = ["학습 예정", "학습 경험 O", "사용 경험 O", "응용 경험 O", "기술 사용 가능"];
  let re = <img src={battery} alt={alt} title={title[level]}></img>;
  return re;
}

export default Profile;
