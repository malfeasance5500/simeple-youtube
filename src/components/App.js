import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideos, setSelectecVideos] = useState(null);
  const [videos, search] = useVideos("alpharad");

  useEffect(() => {
    setSelectecVideos(videos[0]);
  }, [videos]);

  return (
    <div className="container ui">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideos} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectecVideos} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
