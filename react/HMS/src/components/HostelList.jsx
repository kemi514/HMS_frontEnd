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
        "../../../public/hostels/s10.jpg",
        "../../../public/hostels/sr1.jpg",
        "../../../public/hostels/b5.jpg",
      ],
      price: "UGX 8,000,000",
      rating: 5,
      roomtype: "Single Room",
    },
    {
      id: 2,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 3,
      images: [
        "../../../public/hostels/s9.jpg",
        "../../../public/hostels/sr2.jpg",
        "../../../public/hostels/b3.jpg",
      ],
      price: "UGX 4,000,000",
      rating: 4.2,
      roomtype: "Single Room",
    },
    {
      id: 3,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/s2.jpg",
        "../../../public/hostels/sr5.jpg",
        "../../../public/hostels/b2.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "Single Room",
    },
    {
      id: 4,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/s7.jpg",
        "../../../public/hostels/sr4.jpg",
        "../../../public/hostels/b6.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "Single Room",
    },
    {
      id: 5,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/s1.jpg",
        "../../../public/hostels/sr3.jpg",
        "../../../public/hostels/b1.jpg",
      ],
      price: "UGX 2,000,000",
      rating: 3.7,
      roomtype: "Single Room",
    },
    {
      id: 6,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/s3.jpg",
        "../../../public/hostels/sr7.jpg",
        "../../../public/hostels/b4.jpg",
      ],
      price: "UGX 1,000,000",
      rating: 1.7,
      roomtype: "Single Room",
    },
    {
      id: 7,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/s8.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "Single Room",
    },
    {
      id: 8,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d2.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 9,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d3.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 10,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d4.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 11,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d5.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 12,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d6.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 13,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d7.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    {
      id: 14,
      name: "RM 309",
      hostelname: "DOUGLAS VILLA",
      slot: 4,
      images: [
        "../../../public/hostels/d8.jpg",
        "../../../public/hostels/sr6.jpg",
        "../../../public/hostels/b7.jpg",
      ],
      price: "UGX 3,000,000",
      rating: 4.7,
      roomtype: "double Room",
    },
    // Add more hostel objects as needed
  ];

  return (
    <div>
      <div className="hostel-list">
        {Rooms.map((room) => (
          <div class="card my-4" key={room.id}>
            <div id={`carouselExample-${room.id}`} className="carousel slide">
              <div className="carousel-inner">
                {room.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Room ${room.id} Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExample-${room.id}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExample-${room.id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  ariahidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
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
