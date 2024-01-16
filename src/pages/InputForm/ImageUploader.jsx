import ImageUploading from "react-images-uploading";
import { useRecoilState } from "recoil";
import { bossImageState } from "../../state/atoms";
import { Button } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";
export const ImageUploader = () => {
  const [images, setImages] = useRecoilState(bossImageState);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(null);
    setImages(imageList);
  };

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={[]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <div
            className="upload-button border"
            // style={isDragging ? { color: "red" } : null}
            style={
              imageList.length > 0
                ? {
                    backgroundImage: `url(${imageList[0].data_url})`,
                    backgroundSize: "cover",
                  }
                : isDragging
                ? { backgroundColor: "red" }
                : null
            }
            onClick={onImageUpload}
            {...dragProps}
          >
            <div className="upload-prompt-text ">
              {imageList.length === 0 ? (
                "Drag image here, or click to select a file. For direct links to images, paste the URL into the file selector."
              ) : (
                <div>
                  <CancelIcon
                    onClick={onImageRemoveAll}
                    style={{ display: "flex" }}
                  ></CancelIcon>
                </div>
              )}
            </div>
            <CancelIcon onClick={onImageRemoveAll}></CancelIcon>
          </div>
          <center>
            <Button
              onClick={onImageRemoveAll}
              variant="contained"
              disabled={imageList.length < 1}
            >
              {" "}
              Clear Image
            </Button>
          </center>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
