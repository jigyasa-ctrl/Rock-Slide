import React from "react";
interface Props {
  openStories: Function;
}
function Stories({ openStories }: Props) {
  return (
    <div>
      <button id="story" onClick={e => openStories()} />
    </div>
  );
}
export default Stories;
