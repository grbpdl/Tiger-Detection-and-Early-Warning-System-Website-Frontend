import React, { useEffect, useRef } from 'react';

const LiveFeedTwo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket("ws://192.168.137.162:5000");
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
        <div>
            <h1>WebSocket Video Stream</h1>
            <img ref={videoRef} alt="WebSocket Video Stream" />
        </div>
    );
};

export default LiveFeedTwo;
