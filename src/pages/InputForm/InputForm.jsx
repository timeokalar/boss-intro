import { React } from "react";
import "./InputForm.css";
import { Button, TextField } from "@material-ui/core";
import { ImageUploader } from "./ImageUploader";
import { useRecoilState } from "recoil";
import {
  lineOneState,
  lineTwoState,
  lineThreeState,
  lineFourState,
  firstNameState,
  secondNameState,
  bossImageState,
} from "../../state/atoms";
import { useNavigate } from "react-router-dom";

const LocalTextField = ({ value, setValue }) => (
  <TextField
    className="grid-text-field"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    variant="outlined"
  />
);

export const InputForm = () => {
  const [lineOne, setLineOne] = useRecoilState(lineOneState);
  const [lineTwo, setLineTwo] = useRecoilState(lineTwoState);
  const [lineThree, setLineThree] = useRecoilState(lineThreeState);
  const [lineFour, setLineFour] = useRecoilState(lineFourState);
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [secondName, setSecondName] = useRecoilState(secondNameState);
  const [bossImage] = useRecoilState(bossImageState);

  let navigate = useNavigate();
  return (
    <>
      <div className="input-grid border">
        <div>
          <div className="text-cell">
            <LocalTextField value={firstName} setValue={setFirstName} />
          </div>
          <div className="text-cell">
            <LocalTextField value={secondName} setValue={setSecondName} />
          </div>
          <div className="text-cell">
            <LocalTextField value={lineOne} setValue={setLineOne} />
          </div>
          <div className="text-cell">
            <LocalTextField value={lineTwo} setValue={setLineTwo} />
          </div>
          <div className="text-cell">
            <LocalTextField value={lineThree} setValue={setLineThree} />
          </div>
          <div className="text-cell">
            <LocalTextField value={lineFour} setValue={setLineFour} />
          </div>
        </div>
        <div>
          <div>
            <ImageUploader imageList={bossImage} />
          </div>
        </div>
        <Button
          className="generate-button"
          onClick={() => navigate("intro")}
          variant="contained"
        >
          Generate Intro
        </Button>
      </div>
    </>
  );
};

export default InputForm;
