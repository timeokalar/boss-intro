import "./BossIntro.css";
import song from "./song2.mp3";
import "./crt.css";
import { bossImageState } from "../../state/atoms";
import { useRecoilValue } from "recoil";
import sound_only from "./sound_only.jpg";
import { useSearchParams } from "react-router-dom";
import * as LZString from "lz-string";

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
  const blurb = `${firstLine?.toUpperCase() || "First Line"}
  ${secondLine?.toUpperCase() || "Second Line"}
  ${thirdLine?.toUpperCase() || "Third Line"}
  ${fourthLine?.toUpperCase() || "Fourth Line"}`;
  return (
    <>
      <div className="flash"></div>
      <div className="grid crt">
        <div className="background-panel-top">
          <p className="name-text">{firstName?.toUpperCase() || "Top Text"}</p>
          <p className="crt-text black-text">
            {firstName?.toUpperCase() || "Top Text"}
          </p>
        </div>
        <div className="middle-panel"></div>
        <div className="background-panel-bottom ">
          <p className="name-text ">
            {secondName?.toUpperCase() || "Bottom Text"}
          </p>
          <p className="crt-text black-text ">
            {secondName?.toUpperCase() || "Bottom Text"}
          </p>
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
        src={
          LZString.decompressFromEncodedURIComponent(bossImageFromParam) ||
          bossImage[0]?.data_url ||
          sound_only
        }
        alt="boss"
      />
      <p className="blurb">{blurb}</p>
      <button
        className="share-button"
        onClick={() => {
          window.navigator.clipboard.writeText(window.location.href);
          window.alert("A sharable link hass been copied to your clipboard!");
        }}
      >
        Share
      </button>
    </>
  );
}

export default BossIntro;
