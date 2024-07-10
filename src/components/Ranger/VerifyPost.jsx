import React, { useEffect, useState } from 'react';
import { rangernavLinks } from '../../constants/navlinks';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import AdminPost from './subcomponents/AdminPost';
import { UNAPPROVED_POST_URL } from '../../api/urls';
import axios from '../../api/axios';
import AddPost from './subcomponents/AddPost';

function VerifyPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  
  const handleClick = () => {
        localStorage.removeItem("token");
    navigate('/');
  }

  const getPosts = async () => {
    try {
      const response = await axios.get(UNAPPROVED_POST_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.message);
      } else {
        console.log(response.data);
        toast.error(response.data.message)
      }
    } catch (err) {
      console.log(err.message);
      toast.error("error occurred")
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const handleApprove = (id) => {
  
    setPosts(posts.filter(post => post.id !== id));
  }

  const handleDecline = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div>
      <Navbar 
        navLinks={rangernavLinks} 
        activenavtitle="Verify Posts" 
        buttontitle="Logout" 
        callback={handleClick} 
      />
      {posts.map(post => (
        <AdminPost 
          key={post.id}
          id={post.id}
          name={`${post.user_first_name} ${post.user_last_name}`} 
          date={post.postDate} 
          time={post.postTime} 
          description={post.postTitle} 
          image={post.postImageURL}
          onApprove={handleApprove}
          onDecline={handleDecline}
        />
      ))}
      <div className="fixed bottom-4 right-4">
    <button className="bg-purple-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={() => setOpenPopup(true)}>
    Add announcement
  </button>
  </div>
  <AddPost openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
    
  )
}

export default VerifyPost;
