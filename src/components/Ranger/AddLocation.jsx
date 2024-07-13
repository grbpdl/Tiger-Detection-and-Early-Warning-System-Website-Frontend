import React,{useState,useEffect} from "react";
import { adminnavLinks, rangernavLinks } from '../../constants/navlinks';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast';
import { MapContainer, TileLayer, useMap,Marker,Popup,useMapEvents,useMapEvent } from 'react-leaflet'
import { GET_ALL_COORDINATES_URL,ADD_COORDINATE_URL,DELETE_COORDINATES_URL } from '../../api/urls';
import axios from '../../api/axios';


function AddLocation() {
  const navigate = useNavigate();
  const [coordinates, setCoordinates] = useState([]);
  const [position, setPosition] = useState(null);
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate('/');
  }

 

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
console.log(response.data)
        
      } else {
        toast.error("Didnot receive the status code of 200")
      }
    } catch (err) {
      // console.log(err.message);
      toast.error("Error Occured in catch expression")
    }
  }
const deleteCoordinate=async(id)=>{
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`${DELETE_COORDINATES_URL}${id}`, {
      headers: { 'Authorization': `Bearer ${token}`,
                           'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
toast.success(response.data.message)
getCoordiantes();
      
    }
     else if(response.status === 202){
      toast.error("Cant delete this coordinate")
    }
     else {
      toast.error("Didnot receive the status code of 200")
    }
  } catch (err) {
    console.log(err);
    toast.error("Error Occured in catch expression")
  }

  
}


const addCoordinate = async()=>{
  if (!position) {
    toast.error("No position selected");
    return;
  }
  console.log(position.lat);
  console.log(position.lng);

  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post(ADD_COORDINATE_URL, 
      JSON.stringify({latitude:position.lat,longitude:position.lng}),
      {
        headers: { 'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json' },
    }
  );
    if (response.status === 200) {
      toast.success(response.data.message);
      getCoordiantes();
      console.log(response.data)
    } else {
      toast.error("Didnot receive the status code of 200")
    }
  } catch (err) {
    // console.log(err.message);
    toast.error("Error Occured in catch expression")
  }

}


  function LocationMarker() {
    
   
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    
  

    return position === null ? null : (
      <Marker position={position}>
    <Popup>
      Tiger Detected Here <br /> Danger
    </Popup>
  </Marker>
    );
  }
  useEffect(() => {
      getCoordiantes();
    }, []);


  return (
    <div className=" relative h-screen">
      <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <Navbar navLinks={ rangernavLinks  } activenavtitle="Add Danger Zone" buttontitle="Logout" callback={handleClick} />
    <MapContainer center={[27.7172, 85.324]} zoom={7} scrollWheelZoom={true} className="h-full z-10">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {coordinates.map((coord, index) => (
          <Marker key={index} position={[coord.latitude, coord.longitude]}>
            <Popup>
             <p>Tiger Detected Here</p>  
              <button 
        className="bg-green-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full mt-2 items-center" 
        onClick={() => deleteCoordinate(coord.id)}
      >
        Delete
      </button>
            </Popup>
          </Marker>
        ))}
  <LocationMarker />
  
</MapContainer>
<div className="fixed bottom-4 right-4 z-50 ">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg " onClick={addCoordinate}>
    Add Location
  </button>
  </div>
</div>
  );

}

export default AddLocation
