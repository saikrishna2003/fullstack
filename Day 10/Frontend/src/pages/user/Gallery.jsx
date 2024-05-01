import React, { useState } from 'react';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg';
import image6 from '../../assets/images/image6.jpeg';
import image7 from '../../assets/images/image7.jpeg';
import image8 from '../../assets/images/image8.jpeg';
import image9 from '../../assets/images/image9.jpeg';
import image10 from '../../assets/images/image10.jpeg';
import image11 from '../../assets/images/image11.jpeg';
import image12 from '../../assets/images/image12.jpeg';
import image13 from '../../assets/images/image13.jpeg';
import image14 from '../../assets/images/image14.jpeg';
import image15 from '../../assets/images/image15.jpeg';

const Gallery = () => {
  const imageUrls = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleEnlargeImage = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div>
      <div className="gallery p-5">
        <h2 className='gallery_header text-5xl font-bold mt-8 text-center'>Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="gallery_image-container relative overflow-hidden" onClick={() => handleEnlargeImage(imageUrl)}>
              <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 bg-grey-500" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 ">
                <span className="text-white text-lg font-semibold">Click to enlarge</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {enlargedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={handleCloseEnlargedImage}>
          <img src={enlargedImage} alt="Enlarged Image" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
