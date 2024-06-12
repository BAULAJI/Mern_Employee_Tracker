import { useState } from 'react';

function useImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return { image, handleImageChange };
}

export default useImageUpload;
