import "./Gallery.css";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";


const images = [
  { src: gallery1, size: "tall" },
  { src: gallery2, size: "wide" },
  { src: gallery3, size: "normal" },
  { src: gallery4, size: "tall" },
  { src: gallery5, size: "normal" },
  { src: gallery6, size: "wide" },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h3 className="gallery-title">Gallery</h3>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className={`gallery-item ${img.size}`} key={i}>
            <img src={img.src} alt={`gallery-${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
