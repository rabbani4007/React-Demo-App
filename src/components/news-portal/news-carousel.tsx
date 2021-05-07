import React from "react";

export const NewsCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators5"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-1-scaled.jpg"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-2.jpg"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-3.jpg"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-4.jpg"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-5.jpg"
              className="d-block w-100"
            />
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators5"
          data-slide-to="0"
          className="active"
        >
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-1-scaled.jpg"
            className="d-block w-100"
          />
        </li>
        <li data-target="#carouselExampleIndicators5" data-slide-to="1">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-2.jpg"
            className="d-block w-100"
          />
        </li>
        <li data-target="#carouselExampleIndicators5" data-slide-to="2">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-3.jpg"
            className="d-block w-100"
          />
        </li>
        <li data-target="#carouselExampleIndicators5" data-slide-to="3">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-4.jpg"
            className="d-block w-100"
          />
        </li>
        <li data-target="#carouselExampleIndicators5" data-slide-to="4">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-carousel-slide-5.jpg"
            className="d-block w-100"
          />
        </li>
      </ol>
    </div>
  );
};
