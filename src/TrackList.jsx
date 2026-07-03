import Track from './Track';

function TrackList(props) {
   return (
      <ul>
         {props.tracks.map(track => (
            <li key={track.trackId}>
               <Track
                  track={track}
                  addTrack={props.addTrack}
                  removeTrack={props.removeTrack}
                  isInPlayList={props.isInPlayList}
               />
            </li>
         ))}
      </ul>
   )
}

export default TrackList;