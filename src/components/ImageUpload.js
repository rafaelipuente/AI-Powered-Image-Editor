import React from 'react';

function ImageUpload({ setImage }) {
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageUpload;
