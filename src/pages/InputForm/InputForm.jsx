import { useState, React } from "react";
import "./InputForm.css";
import { Button, TextField } from "@material-ui/core";
import { ImageUploader } from "./ImageUploader";
import { useRecoilState } from "recoil";
import { bossImageState } from "../../state/atoms";
import { useNavigate } from "react-router-dom";
import * as LZString from "lz-string";
const LocalTextField = ({ value, setValue }) => (
  <TextField
    className="grid-text-field"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    variant="outlined"
  />
);

export const InputForm = () => {
  const [lineOne, setLineOne] = useState("");
  const [lineTwo, setLineTwo] = useState("");
  const [lineThree, setLineThree] = useState("");
  const [lineFour, setLineFour] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [bossImage] = useRecoilState(bossImageState);
  const [test, setTest] = useRecoilState(bossImageState);

  const x =
    "data:image/webp;base64,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";
  const y = LZString.compressToEncodedURIComponent("Ticky Tacky Doggy Woggy");
  console.log(LZString.decompressFromEncodedURIComponent(y));
  console.log(y.length);

  let navigate = useNavigate();
  return (
    <>
      <div className="input-grid border">
        <div className="image-grid">
          <center>
            <div
              className="image-preview border"
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div className="upload-prompt-text">
                {imgUrl === ""
                  ? "You will see a preview image when a valid image URL is entered to the right."
                  : ""}
              </div>
            </div>
          </center>
          <div className="name-cell">
            <div>
              <div className="line-tag">First Name</div>
              <LocalTextField value={firstName} setValue={setFirstName} />
            </div>
            <div>
              <div className="line-tag">Second Name</div>
              <LocalTextField value={secondName} setValue={setSecondName} />
            </div>
            <div>
              <div className="line-tag">Image URL</div>
              <LocalTextField value={imgUrl} setValue={setImgUrl} />
            </div>
          </div>
        </div>
        <div className="name-cell">
          <h1 className="description-header">Description</h1>
          <div className="description-grid">
            <div className="labels-column">
              <div>First Line</div>
              <div>SecondLine</div>
              <div>Third Line</div>
              <div>Fourth Line</div>
            </div>
            <div className="inputs-column">
              <LocalTextField value={lineOne} setValue={setLineOne} />
              <LocalTextField value={lineTwo} setValue={setLineTwo} />
              <LocalTextField value={lineThree} setValue={setLineThree} />
              <LocalTextField value={lineFour} setValue={setLineFour} />
            </div>
          </div>
        </div>

        <Button
          className="generate-button"
          onClick={() =>
            navigate(
              `intro?name1=${encodeURIComponent(firstName)}&name2=${encodeURI(
                secondName
              )}&l1=${encodeURIComponent(lineOne)}&l2=${encodeURIComponent(
                lineTwo
              )}&l3=${encodeURIComponent(lineThree)}&l4=${encodeURIComponent(
                lineFour
              )}&img=${LZString.compressToEncodedURIComponent(imgUrl)}`
            )
          }
          variant="contained"
        >
          Generate Intro
        </Button>
      </div>
    </>
  );
};

export default InputForm;
