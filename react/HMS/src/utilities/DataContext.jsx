import {createContext, useState, useEffect} from 'react'

const DataContext= createContext({})

export const DataProvider =({children})=>{
  const [blurred, setBlurred] = useState(false)
  const [Hostels, setHostels] = useState([
    {
      id: 1,
      hostelname: "DOUGLAS VILLA",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location ",
      rating: 3,
    },
    {
      id: 2,
      hostelname: "OLYMPIA",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 5,
    },
    {
      id: 3,
      hostelname: "CASTLE VILLE",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 4,
      hostelname: "NANA",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 5,
    },
    {
      id: 5,
      hostelname: "JJ",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 6,
      hostelname: "NAKIYINGI",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 7,
      hostelname: "AGHA KHAN",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 8,
      hostelname: "GOD IS ABLE",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 9,
      hostelname: "MISH",
      images: "../../../public/hostels/s3.jpg",
      direction: "Location ",
      rating: 3,
    },

    // Add more hostel objects as needed
  ])
    const [comments, setComments] = useState([
        {
          id: 1,
          user: "john doe",
          profileImage: "u",
          comment: "This hostel is great!",
          time: "12 hours ago",
        },
        {
          id: 2,
          user: "john doe",
          comment: "Excellent service and facilities.",
          time: "12 hours ago",
        },
        {
          id: 3,
          user: "john doe",
          comment: " Consider improving the speed of the WiFi.",
          time: "12 hours ago",
        },
        {
          id: 4,
          user: "john doe",
          comment: "Train your staff to be more friendly.",
          time: "12 hours ago",
        },
        {
          id: 5,
          user: "john doe",
          comment:
            "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
          time: "12 hours ago",
        },
        {
          id: 5,
          user: "john doe",
          comment:
            "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
          time: "12 hours ago",
        },
        {
          id: 5,
          user: "john doe",
          comment:
            "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
          time: "12 hours ago",
        },
        
      ]);
    return(
        <DataContext.Provider value={{'name':'user', comments, Hostels, blurred, setBlurred}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext