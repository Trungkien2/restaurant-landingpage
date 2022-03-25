import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.scss";

const Intro = () => {
  const [playVid, setPlayvid] = React.useState(false);
  const vidRef = React.useRef();

  const handleVid = () => {
    setPlayvid(!playVid);

    playVid ? vidRef.current.pause() : vidRef.current.play();
  };
  return (
    <div className="video">
      <video
        src={meal}
        type="video/mp4"
        loop
       controls={false }
        muted
        ref={vidRef}
      />
      <div className="video-overlay flex__center">
        <div
          className="video-overlay__circle flex__center"
          onClick={handleVid}
        >
          {playVid ? <BsPauseFill color="#fff" fontSize={38}/> : <BsFillPlayFill color="#fff" fontSize={38}/>}
        </div>
      </div>
    </div>
  );
};
export default Intro;
