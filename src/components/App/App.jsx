import { useState, useEffect } from 'react'

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

function validateFileName(fileName) {
  const safeFileName = fileName.trim().replace(/\s+/g, "-") || "playlist";
  return safeFileName;
}

 function addTrack(track) {
    if (playlist.some(t => t.trackId === track.trackId)) {
      return;
    }

    setPlaylist(prev => [...prev, track]);
  }

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");


  function addTrack(track) {
    if (playlist.some(t => t.trackId === track.trackId)) {
      return;
    }

    setPlaylist(prev => [...prev, track]);
  }

  function removeTrack(track) { 
    setPlaylist(prev =>
      prev.filter(t => t.trackId !== track.trackId)
    );
  }

  function handleSearchSubmit(valueFromChild) {
    setSearchTerm(valueFromChild);
  }

  function handleNameChange(newName) {
    setPlaylistName(newName);
  }
  function handleSavePlaylist() {
    if (playlist.length === 0) return;

    const playlistData = {
      name: playlistName,
      createdAt: new Date().toISOString(),
      tracks: playlist
    };

    const jsonString = JSON.stringify(playlistData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;

     const safeFileName = validateFileName(playlistName);
    link.download = `${safeFileName}.json`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSaveMessage(`Playlist "${playlistName}" downloaded successfully!`);

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);

    setPlaylist([]);
    setPlaylistName("New Playlist");
  }

  
  function isInPlayList(track) {
    return playlist.some(t => t.trackId === track.trackId);
  }


  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchTracks = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=20`
        );

        if (!response.ok) {
          throw new Error("Network error");
        }

        const data = await response.json();
        setSearchResults(data.results);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, [searchTerm]);

  return (
    <div className="app-container">

      <div className="search-bar">
        <SearchBar onSearch={handleSearchSubmit} />
      </div>

      <div className="content">

        <div className="panel">
          {isLoading ? (
            <p>Searching...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <SearchResults
              tracks={searchResults}
              addTrack={addTrack}
              isInPlayList={isInPlayList}
            />
          )}
        </div>

        <div className="panel">
          <PlayList
            tracks={playlist}
            removeTrack={removeTrack}
            playlistName={playlistName}
            onNameChange={handleNameChange}
            onSave={handleSavePlaylist}
            isInPlayList={isInPlayList}
            saveMessage={saveMessage}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
export { validateFileName, addTrack };