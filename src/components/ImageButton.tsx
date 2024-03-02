import React from "react";

interface ImageButtonProps {
  image: string;
  onClick: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ image, onClick }) => {
  const imageStyle = {
    width: "50px", 
    height: "50px", 
  };

  return (
    <button onClick={onClick}>
      <img src={image} alt="Button" style={imageStyle} />
    </button>
  );
};

export default ImageButton;
