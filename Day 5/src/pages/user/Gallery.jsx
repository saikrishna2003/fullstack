import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';
import image10 from '../../assets/images/image10.jpg';
import image11 from '../../assets/images/image11.jpg';
import image12 from '../../assets/images/image12.jpg';
import image13 from '../../assets/images/image13.jpg';
import image14 from '../../assets/images/image14.jpg';
import image15 from '../../assets/images/image15.jpg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Gallery = () => {
  const imageUrls = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15
  ];

  return (
    <div>
       
      <div className="grid grid-cols-3 gap-4 p-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="relative group">
            <img src={imageUrl} alt={`Image ${index + 1}`} className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <p className="text-white text-lg font-bold">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Gallery;
