import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const [isLoading, changeIsLoading] = useState(false);
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
      changeIsLoading(true);
      await fetch('/.netlify/functions/mailSender', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, mail, remarks }),
      }).then(res => {
        if (res && res.status) {
          alert('感謝您，我們會儘快與您聯繫');
        }
        changeIsLoading(false);
      });
    }
  };

  const keywords = [
    '桃園',
    '台北',
    '大璽',
    '中路',
    '建案',
    '購屋',
    '新屋',
    '買房',
    '豪宅',
    '店面',
    '工作室',
    '火車站',
    '國道',
    '交流道',
    '機場',
    '中山高',
    '學區',
  ];

  const description =
    '中路特區，豪氣伸展您的富貴疆域大桃園精華地段。10分鐘近取桃園火車站、國道二號、桃園交流道，機場、中山高、北二高便捷快速，一小時內的快速台北生活圈。';

  return (
    <Layout>
      <SEO title="中路大璽" keywords={keywords} description={description} />
      <section className="banner">
        <img src="/img1.jpg" alt="banner" />
        <div className="banner-contact ">
          即刻入主專線
          <br />
          <a href="tel:+886939-117-358">0939-117-358</a>
          <br />
          <a href="tel:+8863-3161512">03-3161512</a>
        </div>
      </section>
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
        <div className="title has-text-white">立刻聯絡</div>
        <div className="content">
          <a href="tel:+886939-117-358">0939-117-358</a>
          <br />
          <a href="tel:+8863-3161512">03-3161512</a>
        </div>
      </div>
      <section className="section-form-title">
        <div className="title is-white">我有興趣</div>
        <div className="is-white">
          親愛的客戶您好，如果您有任何疑問，歡迎您線上留言給我們，收到您的訊息後，我們儘快請專人回覆您的問題。謝謝您！
        </div>
      </section>
      <section className="seciton-form">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-radiusless"
                    type="text"
                    placeholder="輸入姓名"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-radiusless"
                    type="text"
                    placeholder="輸入聯絡電話"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                {/* <p className="help is-success">This username is available</p> */}
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-radiusless"
                    type="email"
                    placeholder="輸入 Email"
                    value={mail}
                    onChange={handleMailChange}
                  />
                </div>
                {/* <p className="help is-danger">This email is invalid</p> */}
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea is-radiusless"
                    placeholder="輸入聯絡事項"
                    value={remarks}
                    onChange={handleRemarksChange}
                  />
                </div>
              </div>

              <div className="control has-text-centered">
                <button
                  className={`button is-medium is-danger is-radiusless ${
                    isFormValid ? '' : 'is-disabled'
                  } ${isLoading ? 'is-loading' : ''}`}
                  onClick={handleMailSend}
                  disabled={!isFormValid}
                >
                  確認送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <iframe
        title="map"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: 0, height: '500px' }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOFcz6XAwmN98AJkDmgiN93lRQZLLADNc&q=330桃園市桃園區正光路186巷78號"
      />
    </Layout>
  );
};

export default IndexPage;
