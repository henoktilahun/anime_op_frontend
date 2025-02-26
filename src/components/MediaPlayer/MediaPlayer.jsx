import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MediaPlayer.css";

function MediaPlayer({ activeMediaPlayer, audioSource }) {
  return (
    <AudioPlayer
      autoPlay
      className={`media-player ${
        activeMediaPlayer ? "media-player__active" : ""
      }`}
      src={audioSource}
    />
  );
}

export default MediaPlayer;
