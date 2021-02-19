import React, { useState } from "react";
import Images from "./Masa6";

const ImageView = () => {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div>
      <div className="container items-center w-screen h-56 flex flex-col mb-72 md:mb-64">
        <img
          className="h-1500 w-screen flex flex-col"
          style={{
            alignSelf: "center",
            justifySelf: "center",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
            width: 800,
            height: 800,
          }}
          src={selectedImg}
          alt="qq"
        />
        <div className="imgContainer flex flex-row w-screen items-center justify-center flex flex-wrap m-0 p-0">
          {Images.map((img, index) => (
            <img
              className="block flex flex-row items-center flex flex-wrap"
              key={index}
              onClick={() => setSelectedImg(img)}
              style={{
                justifySelf: "center",
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center",
                width: 160,
                height: 160,
                flexWrap: "wrap",

                border: selectedImg === img ? "4px solid #33ccff" : "",
              }}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageView;
