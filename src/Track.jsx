function Track(props) {
  
    return (
        <>
        <img src={props.track.artworkUrl100} alt="Album Cover"></img>
        <p>{props.track.trackName}</p>
        <p>{props.track.artistName}</p>
        <p>{props.track.collectionName}</p>
        {<button disabled={props.isInPlayList(props.track)} onClick={() => props.addTrack(props.track)}> {props.isInPlayList(props.track) ? "Added" : "Add"}</button>}
        {props.removeTrack ? <button onClick={() =>props.removeTrack(props.track)}>Remove</button>: null} 
       
        </>
    );
}

export default Track;