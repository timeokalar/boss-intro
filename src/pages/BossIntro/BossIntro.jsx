import "./BossIntro.css";
import song from "./song2.mp3";
import "./crt.css";
import { bossImageState } from "../../state/atoms";
import { useRecoilValue } from "recoil";
import sound_only from "./sound_only.jpg";
import { useSearchParams } from "react-router-dom";

function BossIntro() {
  const bossImage = useRecoilValue(bossImageState);

  const [searchParams, setSearchParams] = useSearchParams();

  const firstLine = searchParams.get("l1");
  const secondLine = searchParams.get("l2");
  const thirdLine = searchParams.get("l3");
  const fourthLine = searchParams.get("l4");
  const firstName = searchParams.get("name1");
  const secondName = searchParams.get("name2");
  const bossImageFromParam = searchParams.get("img");
  const blurb = `${firstLine.toUpperCase()}
  ${secondLine.toUpperCase()}
  ${thirdLine.toUpperCase()}
  ${fourthLine.toUpperCase()}`;
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
        src={bossImageFromParam || bossImage[0]?.data_url || sound_only}
        alt="boss"
      />
      <p className="blurb">{blurb}</p>
    </>
  );
}

export default BossIntro;
