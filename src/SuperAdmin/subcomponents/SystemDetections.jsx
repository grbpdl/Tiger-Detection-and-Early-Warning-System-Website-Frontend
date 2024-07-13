import React,{ useEffect, useState }  from 'react'
import DetectedPosts from './DetectedPosts'
import { UNAPPROVED_DETECTION_URL } from '../../api/urls';
import axios from '../../api/axios';
import { Toaster, toast } from 'react-hot-toast';



function SystemDetections() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.get(UNAPPROVED_DETECTION_URL, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        console.log(response.data);
        // toast.error(response.data.message)
      }
    } catch (err) {
      console.log(err.message);
      // toast.error("error occurred")
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const handlePostChange = (postId) => {
    // Update posts state by filtering out the post with matching id
    setPosts(posts.filter(post => post.id !== postId));
    toast.success("Sucessful")
  };

  const handleApprove = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  const handleDecline = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }
  return (
<div className=" m-5 p-5 bg-green-100 flex justify-center items-center overflow-x-hidden flex-wrap gap-2">
<Toaster position='center' reverseOrder={false} className="bg-white" />
{posts.map(post => (
        <DetectedPosts  key={post.id}
        id={post.id}
        imageURL={post.IOTImageURL}
        camera={post.Camera}
        onPostChange={handlePostChange} />
      ))}

</div>
  )
}

export default SystemDetections
