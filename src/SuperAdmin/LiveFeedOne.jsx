import React, { useEffect, useRef } from 'react';

const LiveFeedOne = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket("ws://192.168.164.216:5000");
        ws.binaryType = "arraybuffer";

        ws.onmessage = (event) => {
            const arrayBufferView = new Uint8Array(event.data);
            const blob = new Blob([arrayBufferView], { type: "image/jpg" });
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(blob);
            if (videoRef.current) {
                videoRef.current.src = imageUrl;
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="rounded-xl shadow-lg transform hover:shadow-black backdrop-blur-md bg-white/30 m-5 flex-1 justify-center">
        <div>
          <h1 className="text-2xl  font-bold text-green-500 cursor-pointer hover:text-gray-900 transition duration-100 text-center" >Livefeed from Cam 1</h1>
        </div>
        <div className='flex justify-center'>
        
        <img className="p-2"ref={videoRef} alt="WebSocket Video Stream" height={480} width={640}  />
        </div>
      </div>


            
            
        
    );
};

export default LiveFeedOne;
