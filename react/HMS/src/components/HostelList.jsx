import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const HostelList = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const Rooms = [
    {
      id: 1,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: "3 slots available",
      images: [
        "../../../public/hostels/1.jpg",
        "../../../public/hostels/11.jpg",
        "../../../public/hostels/66.jpg",
      ],
      price: "UGX 200000",
      rating: 2,
      roomtype: "Single Room",
    },
    {
      id: 2,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 3,
      images: [
        "../../../public/hostels/22.jpg",
        "../../../public/hostels/6.jpg",
        "../../../public/hostels/33.jpg",
      ],
      price: 200000,
      rating: 4.2,
      roomtype: 1,
    },
    {
      id: 3,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/9.jpg",
        "../../../public/hostels/1.jpg",
        "../../../public/hostels/7.jpg",
      ],
      price: 200000,
      rating: 4.7,
      roomtype: 1,
    },

    // Add more hostel objects as needed
  ];

  return (
    <div>
      <div className="hostel-list">
        {Rooms.map((room) => (
          <div class="card my-4" key={room.id}>
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                {room.images.map((_, index) => (
                  <button
                    type="button"
                    data-bs-target={`#carouselExample${room.id}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {room.images.map((image, index) => (
                    <div
                      class={`carousel-item${index === 0 ? " active" : ""}`}
                      key={index}
                    >
                      <img src={image} class="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <small class="card-title">{room.name}</small>
              <br />
              <small class="card-text">{room.hostelname}</small>
              <br />
              <small class="card-title">{room.slot}</small>
              <br />
              <small class="card-title">{room.price}</small>
              <br />
              <small class="card-text">{room.roomtype}</small>
              <br />
              <div className="stars d-flex align-items-center justify-content-between my-2 text-secondary">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.round(room.rating) ? "text-warning" : ""
                    }
                  />
                ))}
              </div>
              <a href="#" class="btn btn-primary">
                Reserve
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelList;
