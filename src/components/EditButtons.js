import React from 'react';
import axios from 'axios';

function EditButtons({ image, setEditedImage }) {
  const handleEdit = async (editType) => {
    const formData = new FormData();
    const blob = await fetch(image).then(r => r.blob());
    formData.append('image', blob);

    const response = await axios.post(`http://localhost:5000/api/edit/${editType}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    setEditedImage(response.data.editedImage);
  };

  return (
    <div>
      <button onClick={() => handleEdit('apply-happy-filter')}>Apply Happy Filter</button>
      <button onClick={() => handleEdit('apply-scary-filter')}>Apply Scary Filter</button>
    </div>
  );
}

export default EditButtons;
