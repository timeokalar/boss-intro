import "./BossIntro.css";
import song from "./song2.mp3";
// import "./crt.css";
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
import sound_only from "./sound_only.jpg";

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
        <div className="background-panel-top">
          <p className="crt-text name-text">{firstName.toUpperCase()}</p>
          <p className="crt-text black-text">{firstName.toUpperCase()}</p>
        </div>
        <div className="middle-panel"></div>
        <div className="background-panel-bottom ">
          <p className="crt-text name-text ">{secondName.toUpperCase()}</p>
          <p className="crt-text black-text ">{secondName.toUpperCase()}</p>
        </div>
      </div>
      <iframe
        src={song}
        allow="autoplay"
        style={{ display: "none" }}
        id="iframeAudio"
        title="dooraudio"
      ></iframe>
      <img
        className="boss-sprite"
        src={bossImage[0]?.data_url || sound_only}
        alt="boss"
      />
      <p className="blurb">{blurb}</p>
    </>
  );
}

export default BossIntro;
