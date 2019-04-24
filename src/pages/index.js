import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const [name, changeName] = useState('');
  const [phone, changePhone] = useState('');
  const [mail, changeMail] = useState('');
  const [remarks, changeRemarks] = useState('');

  const handleNameChange = e => {
    changeName(e.target.value);
  };

  const handlePhoneChange = e => {
    changePhone(e.target.value);
  };

  const handleMailChange = e => {
    changeMail(e.target.value);
  };
  const handleRemarksChange = e => {
    changeRemarks(e.target.value);
  };

  const isFormValid = name.length > 0 && (phone.length > 0 || mail.length > 0);

  const handleMailSend = async () => {
    if (isFormValid) {
      const response = await fetch('/.netlify/functions/mailSender', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, mail, remarks }),
      });
      const content = await response.json();

      console.log(content);
      // fetch('/.netlify/functions/mailSender')
      //   // .then(response => response.json())
      //   .then(response => console.log(response));
    }
  };

  return (
    <Layout>
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <img src="/img1.jpg" />
      <div className="section2">
        <div className="columns">
          <div className="column is-8">
            <div className="background2-1">
              <div className="content">
                <div>店墅合一</div>
                <div>電梯三代豪居</div>
                <div>整層雙主臥</div>
                <div>總裁店面</div>
                <div>傳世城堡</div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="background2-2" />
          </div>
        </div>
      </div>
      <div className="section-text">
        <div className="title">中路特區，豪氣伸展您的富貴疆域</div>
        <div className="content">
          大桃園精華地段。10分鐘近取桃園火車站、國道二號、桃園交流道，機場、中山高、北二高便捷快速，一小時內的快速台北生活圈。
        </div>
      </div>
      <div className="section3">
        <div className="columns">
          <div className="column is-4">
            <div className="background3-1" />
          </div>
          <div className="column is-4">
            <div className="background3-2" />
          </div>
          <div className="column is-4">
            <div className="background3-3" />
          </div>
        </div>
      </div>
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
            <div className="background4" />
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="columns">
          <div className="column is-one-fifths">
            <div className="img5-1" />
          </div>
          <div className="column ">
            <div className="img5-2" />
          </div>
          <div className="column is-one-quarter">
            <div className="img5-3" />
          </div>
        </div>
      </div>
      <div className="section-text">
        <div className="title">左擁學區 右抱綠地</div>
        <div className="content">
          相鄰四間學校用地。沉浸中興國中、文山國小書香氣息。相近第一志願武陵高中，放心完成孩子一條龍的人文培養。
          1座中央公園、2座鄰里公園、6座兒童遊樂場。超過8公頃以上的公園綠地。鬧中取靜的城市呼吸。
        </div>
      </div>
      <div className="section6">
        <div className="columns">
          <div className="column is-4">
            <div className="img6-1" />
          </div>
          <div className="column is-4">
            <div className="img6-2" />
          </div>
          <div className="column is-4">
            <div className="img6-3" />
          </div>
        </div>
      </div>
      <div className="section7">
        <div className="columns">
          <div className="column is-6">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <div className="img7-1" />
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child">
                  <div className="img7-2" />
                </div>
                <div className="tile is-child">
                  <div className="img7-3" />
                </div>
              </div>
            </div>
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
      </div>
      <div className="section8">
        <div className="columns">
          <div className="column is-9">
            <div className="img8-1" />
          </div>
          <div className="column is-3">
            <div className="img8-2" />
          </div>
        </div>
      </div>
      <div className="section-contact">
        <div className="title">立刻聯絡</div>
        <div className="content">
          <a href="tel:+886939-117-358">0939-117-358</a>
          <br />
          <a href="tel:+8863-3161512">03-3161512</a>
        </div>
      </div>
      <iframe
        width="100%"
        height="500"
        frameborder="0"
        style={{ border: 0, height: "500px" }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOFcz6XAwmN98AJkDmgiN93lRQZLLADNc&q=330桃園市桃園區正光路186巷78號"
      /> */}

      <div className="field">
        <label className="label">姓名</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="您的姓名"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">電話</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email input"
            value={mail}
            onChange={handleMailChange}
          />
        </div>
        {/* <p className="help is-danger">This email is invalid</p> */}
      </div>

      <div className="field">
        <label className="label">備註</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Textarea"
            value={remarks}
            onChange={handleRemarksChange}
          />
        </div>
      </div>

      <div class="control">
        <button
          className={`button is-primary ${isFormValid ? '' : 'is-disabled'}`}
          onClick={handleMailSend}
          disabled={!isFormValid}
        >
          hihi
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
