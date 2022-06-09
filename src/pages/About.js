import React, { Component } from 'react';
import "./About.css";
import KS from "../assets/KS.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p></p> 
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src= {KS}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kayley Seow</div>
            <div className="brief_description">
              <b>(She/Her/Hers)</b>
              <br></br> 
              📍: Bay Area, CA || Madison, WI
              <br></br> 
              🏫: Computer Science & Statistics Honors @ UW-Madison 
              <br></br>  
              <br></br> 
              Hey y’all, I’m Kayley — it’s really nice to meet you! I’m a self-proclaimed tinkerer, LEGO hobbyist, foodie, amateur photographer, flutist, and pianist; so, quite a few things there. If I’m not at hackathons, you can probably find me hammocking by Lake Mendota with a good book, playing badminton, cross stitching, exploring museums, or writing postcards!
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}