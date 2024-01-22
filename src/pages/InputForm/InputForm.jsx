import { useState, React } from "react";
import "./InputForm.css";
import { Button, TextField } from "@material-ui/core";

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
              <div>
                <LocalTextField value={lineOne} setValue={setLineOne} />
              </div>
              <div>
                <LocalTextField value={lineTwo} setValue={setLineTwo} />
              </div>
              <div>
                <LocalTextField value={lineThree} setValue={setLineThree} />
              </div>
              <div>
                <LocalTextField value={lineFour} setValue={setLineFour} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-cell">
          <center>
            <Button
              className="generate-button"
              onClick={() =>
                navigate(
                  `intro?name1=${encodeURIComponent(
                    firstName
                  )}&name2=${encodeURI(secondName)}&l1=${encodeURIComponent(
                    lineOne
                  )}&l2=${encodeURIComponent(lineTwo)}&l3=${encodeURIComponent(
                    lineThree
                  )}&l4=${encodeURIComponent(
                    lineFour
                  )}&img=${LZString.compressToEncodedURIComponent(imgUrl)}`
                )
              }
              variant="contained"
              style={{ width: "80%" }}
            >
              Generate Intro
            </Button>
          </center>
        </div>
      </div>
    </>
  );
};

export default InputForm;
