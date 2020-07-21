import React, { useState } from "react";
import "./storyopen.css";



interface Props {
  closeStory: Function;
  prev: Function;
  next: Function;
}

function StoryOpen({ closeStory }: Props) {
  const array = [
    {
      image:
        "https://www.wallpaperwolf.com/wallpapers/iphone-wallpapers/hd/download/metallica-rock-band-0457.png",
      text: ""
    },
    {
      
        image:
        "https://tse4.mm.bing.net/th?id=OIP.1-2wa6uX6W_EtxTyqGyQDQHaNL&pid=Api&P=0&w=300&h=300",
      text: "Rock and Roll",
      music:
        "https://www.redringtones.com/wp-content/uploads/2017/04/hotel-california.mp3"
    },
    {
      image:
        "https://www.desktopbackground.org/download/480x800/2011/02/22/161708_queen-rock-band-wallpapers-hd-for-phone-46561-full-hd-wallpapers_1920x1200_h.jpg",
      text: "",
      music:
        "https://www.redringtones.com/wp-content/uploads/2017/04/hotel-california.mp3",
    },
    {
      image:
        "http://www.baltana.com/files/wallpapers-5/Muse-Rock-Band-Wallpaper-HD-17491.jpg",
        text:"Rock and roll was born and evolved in the United States"
        
    },
    {
      image: "http://wallpapercave.com/wp/mPUyfHq.jpg",
      text: "Rock and Roll defined the new phase of music just for music’s sake. "
    },
    {
      image:
        "http://pre07.deviantart.net/d80c/th/pre/f/2015/184/4/a/camiseta_hecha_por_m_by_terrordelacomarca-d8zr0fz.jpg",
      text: ""
    },
    {
      image:
        "http://guitaralliance.com/riff-o-matic/private/private/riff-a-day/july_04/mama_kin/aerosmith.jpg",
      text: " electric guitar continues to play the central part in every sub-genre"
    },
    {
      image:
        "https://www.johnnyandthezephyrs.co.uk/site/assets/files/1050/img_3742-1.jpg",
      text: ""
    }
  ];
  const [state, setState] = useState(1);
  

  function prev() {
    if (state <= 1) {
      setState(6);
    
    } else {
      setState(state - 1);
      
    }
    
  }

  function next(e) {
    if (state >= 6) {
      setState(2);
     
    } else {
      setState(state + 1);
    
    }
if(e.target.class==='fade'){
e.target.className='';
e.target.className='fade';
}
  }
  
  return (
  
    <div className="story-container">
      <audio className="audio-element" controls autoPlay loop>
          <source src={array[state].music} type="audio/mpeg" />
        </audio>

      <span onClick={closeStory}>
        <i className="far fa-times-circle" />
      </span>

      <span onClick={prev}>
        <i className="fas fa-chevron-circle-left" />
      </span>

      <div onClick={prev} className="story-side1 fade">
        <img src={array[state - 1].image} alt="" />
      </div>

      <div className="story fade">
        <img onClick={next} src={array[state].image} alt="" />
        
        <p>{array[state].text}</p>
      </div>

      <div onClick={next} className="story-side2 fade">
        <img src={array[state + 1].image} alt="" />
      </div>

      <span onClick={next}>
        <i className="fas fa-chevron-circle-right" />
      </span>
    </div>

   
  );


}
export default StoryOpen;
