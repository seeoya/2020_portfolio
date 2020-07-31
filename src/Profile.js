import React, { Component } from "react";
import $ from "jquery";

function Profile({ selectPage }) {
  const skillList = [
    //theme: 1(Front) 2(back) 3(media) 4(else)
    {
      id: 1,
      theme: 1,
      name: "HTML5",
      icon: ""
    },
    {
      id: 2,
      theme: 1,
      name: "CSS3",
      icon: ""
    },
    {
      id: 3,
      theme: 1,
      name: "JAVASCRIPT",
      icon: ""
    },
    {
      id: 4,
      theme: 1,
      name: "JQUERY",
      icon: ""
    },
    {
      id: 5,
      theme: 2,
      name: "JAVA&JSP",
      icon: ""
    },
    {
      id: 6,
      theme: 1,
      name: "REACT",
      icon: ""
    },
    {
      id: 7,
      theme: 3,
      name: "PHOTOSHOP",
      icon: ""
    },
    {
      id: 8,
      theme: 4,
      name: "GITHUB",
      icon: ""
    },
    {
      id: 9,
      theme: 4,
      name: "EXCEL",
      icon: ""
    },
    {
      id: 10,
      theme: 4,
      name: "POWERPOINT",
      icon: ""
    },
    {
      id: 11,
      theme: 2,
      name: "ORACLE DB",
      icon: ""
    },
    {
      id: 12,
      theme: 2,
      name: "MY-SQL",
      icon: ""
    }
  ];

  const educationList = [
    {
      id: 1,
      date: "2012. 03 ~ 2015. 02",
      name: "인창고등학교",
      state: "졸업"
    },
    {
      id: 2,
      date: "2016. 03 ~ 2019. 02",
      name: "서경대학교(미용학과)",
      state: "졸업"
    },
    {
      id: 3,
      date: "2019. 07 ~ 2021. 02",
      name: "학점은행제(컴퓨터공학과)",
      state: "졸업예정"
    },
    {
      id: 4,
      date: "2019. 07 ~ 2021. 02",
      name: "학점은행제(컴퓨터공학과)",
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
      <h1 className="profile__title">PROFILE</h1>

      <div className="profile__name">
        김수영<span>Hailey KIM</span>
      </div>
      <div className="profile__contact">
        <p>seeoya@naver.com</p>
      </div>

      <div className="profile__skills">
        <h3>SKILL</h3>
        {skillList
          .sort((a, b) => {
            if (a.theme > b.theme) {
              return 1;
            }
            if (a.theme < b.theme) {
              return -1;
            }
            return 0;
          })
          .map((i) => (
            <span>{i.name} </span>
          ))}
      </div>

      <div className="profile__educations">
        <h3>EDUCATION</h3>
        <table>
          <tr>
            <th>기간</th>
            <th>소재</th>
            <th>구분</th>
          </tr>
          {educationList.reverse().map((i) => (
            <tr>
              <td>{i.date}</td>
              <td>{i.name}</td>
              <td>{i.state}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="profile__certifications">
        <h3>CERTIFICATION</h3>
        <table>
          <tr>
            <th>취득일</th>
            <th>자격명</th>
            <th>발행처</th>
            <th>결과</th>
          </tr>
          {certificationList.map((i) => (
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

export default Profile;
