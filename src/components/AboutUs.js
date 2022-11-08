import "./AboutUs.css"
import "./Navigation"

import React, {useState, useEffect} from 'react';
import { Navigation } from "./Navigation";

function AboutUs() {
  useEffect(()=>{
    setVisible(true);
  })
  const [visible,setVisible] = useState(false);
  return (
        <div className="About">
      <div id="pageTitle">
          <p>OUR TEAM</p>
      </div>
      <div className="columns">
        <div id="team">
          <div>
            <p id="teamTitle">CLIAR BROWN</p>
            <p id="teamPos">CEO</p>
          </div>
          <img className="prof" src="https://www.bing.com/th?id=OIP.Ont1oB38EvcKiVT9T1VtrwHaHe&w=248&h=251&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="CEO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">ADMA FINCH</p>
            <p id="teamPos">CTO</p>
          </div>
          <img className="prof" src="https://www.bing.com/th?id=OIP.Ont1oB38EvcKiVT9T1VtrwHaHe&w=248&h=251&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="CTO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">JHON REYSE</p>
            <p id="teamPos">CFO</p>
          </div>
          <img className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CFO" />
        </div>
      </div>
      <div className="columns" id="middleColumn">
        <div id="pageTitle1">
          <p>OUR TEAM</p>
        </div>
        <div id="pageData">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="columns" id="rightColumn">
        <div id="team">
          <img id="imgRight" className="prof"  src="https://www.bing.com/th?id=OIP.Ont1oB38EvcKiVT9T1VtrwHaHe&w=248&h=251&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="CEO" />
          <div>
            <p id="teamTitle">CLIAR BROWN</p>
            <p id="teamPos">CEO</p>
          </div>
        </div>
        <div id="team">
          <img id="imgRight" className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CTO" />
          <div>
            <p id="teamTitle">ADMA FINCH</p>
            <p id="teamPos">CTO</p>
          </div>
        </div>
        <div id="team" >
          <img id="imgRight" className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CFO" />
          <div>
            <p id="teamTitle">JHON REYSE</p>
            <p id="teamPos">CFO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;