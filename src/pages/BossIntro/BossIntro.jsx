import "./BossIntro.css";
import b from "./b.png";
import song from "./song2.mp3";
import "./crt.css";
import {
  lineOneState,
  lineTwoState,
  lineThreeState,
  lineFourState,
  firstNameState,
  secondNameState,
  bossImageState,
} from "../../state/atoms";
import { useRecoilValue } from "recoil";

var blurb = "He went To the Capitol To Stop The Steal";
function BossIntro() {
  const lineOne = useRecoilValue(lineOneState);
  const lineTwo = useRecoilValue(lineTwoState);
  const lineThree = useRecoilValue(lineThreeState);
  const lineFour = useRecoilValue(lineFourState);
  const firstName = useRecoilValue(firstNameState);
  const secondName = useRecoilValue(secondNameState);
  const bossImage = useRecoilValue(bossImageState);

  const blurb = `${lineOne.toUpperCase()}
  ${lineTwo.toUpperCase()}
  ${lineThree.toUpperCase()}
  ${lineFour.toUpperCase()}`;
  return (
    <>
      <div className="flash"></div>
      <div className="grid crt">
        <div className="background-panel">
          <p className="crt-text">{firstName.toUpperCase()}</p>
        </div>
        <div className="middle-panel"></div>
        <div className="background-panel flipped">
          <p className="flipped crt-text">{secondName.toUpperCase()}</p>
        </div>
      </div>
      <iframe
        src={song}
        allow="autoplay"
        style={{ display: "none" }}
        id="iframeAudio"
        title="dooraudio"
      ></iframe>
      <img className="boss-sprite" src={bossImage[0].data_url} alt="boss" />
      <p className="blurb">{blurb}</p>
    </>
  );
}

export default BossIntro;
