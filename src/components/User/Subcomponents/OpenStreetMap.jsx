import React,{useState,useEffect} from "react";
import { MapContainer, TileLayer, useMap,Marker,Popup,useMapEvents,useMapEvent,Circle } from 'react-leaflet'
import CustomMarker from "./CustomMarker";
import { GET_ALL_COORDINATES_URL } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster,toast } from 'react-hot-toast';


export default function OpenStreetMap() {
  const [coordinates, setCoordinates] = useState([]);

  const getCoordiantes = async () => {
    try {
      const response = await axios.get(GET_ALL_COORDINATES_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        const combinedCoordinates = [
          ...response.data.forum_post_coordinates,
          ...response.data.danger_zone_coordinates,
        ];
        setCoordinates(combinedCoordinates);
        console.log(combinedCoordinates);
      } else {
        toast.error("Didnot receive the status code of 200")
      }
    } catch (err) {
      // console.log(err.message);
      toast.error("Error Occured in catch expression")
    }
  }

  useEffect(() => {
    getCoordiantes();
    
  }, []);


  return (
    <div>
       <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
    <MapContainer center={[27.7172, 85.324]} zoom={8} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {coordinates.map((coord, index) => (
           <Circle
           key={index}
           center={[coord.latitude, coord.longitude]}
           radius={500} // Set the radius here in meters
           color="red" // Optional: Set the color of the circle
         >
           <Popup>
             Tiger Detected Here <br /> Danger
           </Popup>
         </Circle>
        ))}
  

</MapContainer>
</div>
  );
}
