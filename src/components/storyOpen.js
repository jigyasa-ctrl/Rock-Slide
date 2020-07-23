import React, { useState, useEffect } from "react";
import "./storyopen.css";



function StoryOpen() {
  const array = [
    {
      image:
        "https://i1.wp.com/www.techgrapple.com/wp-content/uploads/2016/09/Pure-Black-Wallpaper-in-Full-HD-Resolution.png?fit=1920%2C1080&ssl=1",
      text: ""
    },
    {
      image:
        "https://i.pinimg.com/736x/f4/b3/d7/f4b3d7c7444f14b4c5237effa5532862--wallpaper-rock-and-roll-rock-wallpaper-iphone.jpg",
      text: "",
      music:
        "https://www.redringtones.com/wp-content/uploads/2017/04/hotel-california.mp3"
    },
    {
      image:
        "https://www.desktopbackground.org/download/480x800/2011/02/22/161708_queen-rock-band-wallpapers-hd-for-phone-46561-full-hd-wallpapers_1920x1200_h.jpg",
      text: "",
      music:
        "https://www.redringtones.com/wp-content/uploads/2017/04/hotel-california.mp3"
    },
    {
      image:
        "http://www.baltana.com/files/wallpapers-5/Muse-Rock-Band-Wallpaper-HD-17491.jpg",
      text: "Rock and roll was born and evolved in the United States"
    },
    {
      image: "http://wallpapercave.com/wp/mPUyfHq.jpg",
      text:
        "Rock and Roll defined the new phase of music just for music’s sake. "
    },
    {
      image:
        "http://pre07.deviantart.net/d80c/th/pre/f/2015/184/4/a/camiseta_hecha_por_m_by_terrordelacomarca-d8zr0fz.jpg",
      text: ""
    },
    {
      image:
        "http://guitaralliance.com/riff-o-matic/private/private/riff-a-day/july_04/mama_kin/aerosmith.jpg",
      text:
        " electric guitar continues to play the central part in every sub-genre"
    },
    {
      image:
        "https://i1.wp.com/www.techgrapple.com/wp-content/uploads/2016/09/Pure-Black-Wallpaper-in-Full-HD-Resolution.png?fit=1920%2C1080&ssl=1",
      text: ""
    }
  ];
  const [state, setState] = useState(1);
  
  const [url] = useState([
    "https://www.redringtones.com/wp-content/uploads/2017/04/hotel-california.mp3",
    "https://www.redringtones.com/wp-content/uploads/2017/11/smoke-on-the-water.mp3",
    "https://www.redringtones.com/wp-content/uploads/2017/04/we-will-rock-you.mp3",
    "https://www.redringtones.com/wp-content/uploads/2017/08/Pink-floyd-ringtone.mp3",
    "https://www.redringtones.com/wp-content/uploads/2020/01/led-zeppelin-whole-lotta-love-ringtone.mp3",
    "https://www.redringtones.com/wp-content/uploads/2017/03/stairway-to-heaven.mp3",
    "https://www.redringtones.com/wp-content/uploads/2018/09/somewhere-over-the-rainbow-ringtone.mp3",
    "https://www.redringtones.com/wp-content/uploads/2020/05/low-rider-ringtone.mp3"
  ]);
  
  const audio = new Audio(url[state]);

  useEffect(() => {
   audio.play();
  
  })
 

  function prev() {
    audio.pause();
    

    if (state === 1) {
      document.getElementsByClassName(
        "fa-chevron-circle-left"
      )[0].style.display = "none";
      
    } else {
      setState(state - 1);
      document.getElementsByClassName(
        "fa-chevron-circle-left"
      )[0].style.display = "";
      document.getElementsByClassName(
        "fa-chevron-circle-right"
      )[0].style.display = "";
      

      var count = document.getElementsByClassName("page")[state];
      count.classList.remove("active");
    }
  }
  function pause() {
    if (document.getElementById("pause").className === "fas fa-pause") {
      document.getElementById("pause").className = "fas fa-play";
      audio.pause();
    } else {
      document.getElementsByClassName("fas fa-play")[0].className =
        "fas fa-play";
        document.getElementById("pause").className = "fas fa-pause";
      audio.play();
    }
  }

  
  function next(e) {
    audio.pause();
    if (state >= 6) {
      document.getElementsByClassName(
        "fa-chevron-circle-right"
      )[0].style.display = "none";
      
    } else {
      setState(state + 1);
      
      document.getElementsByClassName(
        "fa-chevron-circle-left"
      )[0].style.display = "";

      var count = document.getElementsByClassName("page")[state];
      count.classList.add("active");

    }

    /*check above*/

    if (e.target.class === "fade") {
      e.target.className = "";
      e.target.className = "fade";
    }
  }

  return (
    <div className="story-container">
     
      <span>
        <i id="pause" onClick={pause} class="fas fa-pause" />
      </span>

      <span className="responsive1" onClick={prev}>
        <i className="fas fa-chevron-circle-left" />
      </span>

      <div onClick={prev} className="story-side1 fade">
        <img src={array[state - 1].image} alt="" />
      </div>

      <div className="story fade">
        <img onClick={next} src={array[state].image} alt="" />

        <p className="text">{array[state].text}</p>
      </div>

      <div onClick={next} className="story-side2 fade">
        <img src={array[state + 1].image} alt="" />
      </div>

      <span className="responsive2" onClick={next}>
        <i className="fas fa-chevron-circle-right" />
      </span>
      <div id="pagination">
        <span className="page" />
        <span className="page" />
        <span className="page" />
        <span className="page" />
        <span className="page" />
        <span className="page" />
        <span className="page" />
      </div>
    </div>
  );
}
export default StoryOpen;

