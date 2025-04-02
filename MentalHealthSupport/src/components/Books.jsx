import React from 'react';
import Slider from "react-slick";
import "../styles/Carousel.css"; // Custom CSS for the carousel

export function Books() {
  const images = [
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 1 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 2 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 3 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 4 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 5 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 6 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 7 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 8 Description",
    },
    {
      src: "https://images.pexels.com/photos/6062045/pexels-photo-6062045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      text: "Image 9 Description",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={`Slide ${index}`} className="carousel-image" />
            <div className="carousel-text-holder">
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
