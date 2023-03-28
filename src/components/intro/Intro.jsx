import React from 'react'
import "./intro.css"
import Github from "../../img/github.png"
import Linkdlin from "../../img/linkedin.png"
import Insta from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import Crown from "../../img/crown.png"
import FloatingDiv from '../floating/FloatingDiv'
import ThumbsUp from "../../img/thumbup.png"
import Glasses from "../../img/glassesimoji.png"
function Intro() {
  return (
    <div className='i-wrapper'>
      <div className="i-left">
        <div className="i-name">

       <span>Hey I am</span>
       <span>Syed Muzil Hassan</span>
       <span>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Corrupti culpa ducimus 
        officiis animi sed iusto cum libero fugiat,
         totam, enim officia quos rerum facilis aliquam.
          Excepturi aliquid corrupti dicta vel!</span>
        </div>
        <button className='i-button'>Hire me</button>

        <div className="i-images">
            <img src={Github} alt="" />
            <img src={Linkdlin} alt="" />
            <img src={Insta} alt="" />
        </div>
      </div>

      <div className="i-right">
         <img src={vector1} alt="" />
         <img src={vector2} alt="" />
         <img src={Boy} alt="" />
         <img src={Glasses} alt="" />
          <div style={{top:"-4%", left:"68%"}}>
         <FloatingDiv image={Crown} text1={"Full Stack"} text2={"Developer"}/>
          </div>
          <div style={{top:"18rem", left:"0rem"}}>
            <FloatingDiv image={ThumbsUp} text1={"Best Design"} text2={"Award"}/> 
          </div>
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
