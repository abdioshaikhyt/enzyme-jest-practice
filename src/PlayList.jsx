import TrackList from './trackList';

function PlayList(props) {
    return (
       
        <div>
           <label htmlFor="playListName">
           </label>
           <input id="playListName" name="playListName" onChange={(e) =>props.onNameChange(e.target.value)} value={props.playListName}></input>
           {props.saveMessage.trim() && <p>{props.saveMessage}</p>}
           <p>
  {props.tracks.length === 1
    ? `${props.tracks.length} track in the playlist.`
    : `${props.tracks.length} tracks in the playlist.`}
</p>
        <TrackList
        tracks={props.tracks}
        removeTrack={props.removeTrack}
        isInPlayList={props.isInPlayList}/> 
        <button 
            disabled={props.tracks.length === 0} 
            onClick={() => props.onSave()}>
            {props.tracks.length === 0 ? "Playlist is empty must have at least one track to save" : "Save to Local Storage"}
        </button>
       </div> 
    );
}

export default PlayList;