import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const handleMailSend = () => {
    fetch("/.netlify/functions/mailSender")
      // .then(response => response.json())
      .then(response => console.log(response));
  };
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <img src="/img1.png" />
      <div className="section2">
        <div className="content">
          <div>店墅合一</div>
          <div>電梯三代豪居</div>
          <div>整層雙主臥</div>
          <div>總裁店面</div>
          <div>傳世城堡</div>
        </div>
        <img src="/img2.png" />
      </div>
      <div className="section-text">
        <div className="title">中路特區，豪氣伸展您的富貴疆域</div>
        <div className="content">
          大桃園精華地段。10分鐘近取桃園火車站、國道二號、桃園交流道，機場、中山高、北二高便捷快速，一小時內的快速台北生活圈。
        </div>
      </div>
      <img src="/img3.png" />
      <div className="section4">
        <div className="columns">
          <div className="column is-7">
            <div className="grid">
              <div className="title">
                住辦合一
                <br />
                下樓即上班
              </div>
              <div className="content">
                與其拿來通勤
                <br />
                您的時間可以更精準的安排
                <br />
                牙醫中醫，會計律師，直播攝影
                <br />
                各事務所工作室搶先入駐
              </div>
            </div>
          </div>
          <div className="column is-5">
            <img src="/img4.png" />
          </div>
        </div>
      </div>
      <img src="/img5.png" />
      <div className="section-text">
        <div className="title">左擁學區 右抱綠地</div>
        <div className="content">
          相鄰四間學校用地。沉浸中興國中、文山國小書香氣息。相近第一志願武陵高中，放心完成孩子一條龍的人文培養。
          1座中央公園、2座鄰里公園、6座兒童遊樂場。超過8公頃以上的公園綠地。鬧中取靜的城市呼吸。
        </div>
      </div>
      <img src="/img6.png" />
      <div className="columns">
        <div className="column is-6">
          <img src="/img7.png" />
        </div>
        <div className="column is-6">
          <div className="grid">
            <div className="title">精裝一品大宅</div>
            <div className="content">
              蒙地卡羅花崗石弘暉大器
              <br />
              全棟TOTO衛浴設備雙主臥
              <br />
              免治馬桶及三合一暖風機
              <br />
              杜邦米蘭石檯面、玻璃晶面板
              <br />
              全棟精品設備
            </div>
          </div>
        </div>
      </div>
      <img src="/img8.png" />
      <div className="section-contact">
        <div className="title">立刻聯絡</div>
        <div className="content">
          <a href="tele:+886939-117-358">0939-117-358</a>
          <br />
          <a href="tele:+8863-3161512">03-3161512</a>
        </div>
      </div>
      <iframe
        width="100%"
        height="500"
        frameborder="0"
        style={{ border: 0, height: "500px" }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOFcz6XAwmN98AJkDmgiN93lRQZLLADNc&q=330桃園市桃園區正光路186巷78號"
      />

      {/* <button className="button is-primary" onClick={handleMailSend}>
        hihi
      </button> */}
    </Layout>
  );
};

export default IndexPage;
