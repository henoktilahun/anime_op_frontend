import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MediaPlayer.css";
//import audioSource from "../../assets/bad_bunny.mp3";

function MediaPlayer({ activeMediaPlayer, audioSource }) {
  return (
    <AudioPlayer
      autoPlay
      className={`media-player ${
        activeMediaPlayer ? "media-player__active" : ""
      }`}
      src={audioSource}
      //src="https://a.animethemes.moe/AttackNo1-ED1.ogg"
    />
  );
}

export default MediaPlayer;
