import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import { usernavLinks } from '../../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import Post from './Subcomponents/Post';
import { APPROVED_POST_URL } from '../../api/urls';
import axios from '../../api/axios';
import { Toaster,toast } from 'react-hot-toast';


function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const handleClick = () => {
    navigate('/login');
  }

  const getPosts = async () => {
    try {
      const response = await axios.get(APPROVED_POST_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data)
            if (response.status === 200) {
        setPosts(response.data.message.reverse());
      } else {
        toast.error("Didnot receive the status code of 200")
      }
    } catch (err) {
      // console.log(err.message);
      toast.error("Error Occured in catch expression")
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className=' w-auto'>
        <Navbar navLinks={usernavLinks} activenavtitle="Posts" buttontitle="Login" callback={handleClick} />
        <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
        {posts.map(post => (
        <Post 
          key={post.id}
          name={`${post.user_first_name && post.user_last_name ? `${post.user_first_name} ${post.user_last_name}` : 'From IOT'}`}
          date={post.postDate} 
          time={post.postTime} 
          description={post.postTitle} 
          image={post.postImageURL}
        />
      ))}

    </div>
  )
}

export default Posts
