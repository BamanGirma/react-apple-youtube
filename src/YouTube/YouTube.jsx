/* https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiVehbt52rdKHj6jK9wIeP7sPTgkMkUKQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9 */


import React, { useEffect, useState } from "react";
import './bootstrap.css';

function YouTube() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiVehbt52rdKHj6jK9wIeP7sPTgkMkUKQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
    ) 
    .then((response) => response.json())
    .then((data) => {
        const videoData = data.items;
        setYoutubeVideos(videoData);
    })
  }, []);
  return (
    <div className="container mt-5">
              <h2 className="mb-4 text-center font-weight-bold" style={{ fontSize: "2rem" }}>
        Latest Videos
      </h2>
      <div className="row">
        {youtubeVideos.map((video, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              
              <div className="card-body">
                
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img
                src={video.snippet.thumbnails.high.url}
                className="card-img-top"
                alt={video.snippet.title}
              />
                 <h5 className="card-title">{video.snippet.title}</h5>
                 <p className="card-text">{video.snippet.description}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTube;