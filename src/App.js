import React, { useState } from "react";
import "./styles.css";
import Stories from "./stories";
import StoryOpen from "./components/storyOpen";

export default function App() {
  const [storyOpen, setStoryOpen] = useState(false);
 

  function openStories() {
    setStoryOpen(true);
    console.log("hello");
  }
  
  function closeStory() {
    console.log("close");
    setStoryOpen(false);
  }

  return (
    <div className="App">
      <Stories openStories={openStories} />
      {storyOpen && <StoryOpen closeStory={closeStory} />}
    </div>
  );
}
