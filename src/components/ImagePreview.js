import React from 'react';

function ImagePreview({ image }) {
  return (
    <div>
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default ImagePreview;
