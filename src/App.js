import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import EditButtons from './components/EditButtons';
import './index.css';

function App() {
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  return (
    <div className="App">
      <h1>AI-Powered Image Editor</h1>
      <ImageUpload setImage={setImage} />
      <ImagePreview image={image} />
      {image && <EditButtons image={image} setEditedImage={setEditedImage} />}
      {editedImage && <ImagePreview image={editedImage} />}
    </div>
  );
}

export default App;
