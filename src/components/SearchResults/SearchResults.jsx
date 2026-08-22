import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  return (
    <div>
      <TrackList
        tracks={props.tracks}
        addTrack={props.addTrack}
        isInPlayList={props.isInPlayList} />  
    </div> 
  );
}

export default SearchResults;