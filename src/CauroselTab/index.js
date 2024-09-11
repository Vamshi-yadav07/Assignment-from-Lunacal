import React, { useState, useRef } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "./index.css";

const sampleList = [
  "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1726053169~exp=1726056769~hmac=0b8d81a0cb77fff4dc0d1a5da2f021ddbe9ddbb946ac0174619ccce1cef89e52&w=1060",
  "https://img.freepik.com/premium-photo/kids-practicing-social-distancing-classroom-setting_1240525-88214.jpg?w=740",
  "https://img.freepik.com/premium-photo/college-students-cramming-outdoor_23-2149649363.jpg?w=1060",
  "https://img.freepik.com/free-photo/college-students-cramming-outdoor_23-2149649344.jpg?t=st=1726048249~exp=1726051849~hmac=e2a388e919fe72bcf6c70e66c46cef440a8b9a76f5b4b4a102de13ec15273caa&w=1060",
];

const Gallery = () => {
  const [images, setImages] = useState([...sampleList]);
  const carouselRef = useRef(null); 

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="gallery-container">
      <div className="basic-icons">
        <FaRegQuestionCircle className="icon-2" />
        <BiGridVertical className="icon-1" />
      </div>
      <div className="courosel-head-card">
        <div className="header">
          <h2 className="gallery-title">Gallery</h2>
          <label className="add-image-btn">
            <input type="file" accept="image/*" onChange={handleAddImage} />
            <span className="addimg-title">+ ADD IMAGE</span>
          </label>
          <div className="arrow-buttons">
            <button type="button" className="left-button" onClick={scrollLeft}>
              <FaArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="right-button"
              onClick={scrollRight}
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="carousel-container">
          {images.length > 0 ? (
            <div className="carousel" ref={carouselRef}>
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`carousel-${index}`} />
                </div>
              ))}
            </div>
          ) : (
            <p className="no-images-text">No images added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
