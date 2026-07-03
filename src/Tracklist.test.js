import React from "react";
import TrackList from "./TrackList";
import { shallow } from "enzyme";
import theGoat from "./Images/thegoat.jpg";
import dieALegend from "./Images/die-a-legend.jpg";
import Track from "./Track";
describe("it should render a tracklist ", () => {
    const mockAddTrack = jest.fn();
    const mockIsInPlayListTrue = () => true;
    const mockIsInPlayList = () => false;
    const mockRemoveTrack = jest.fn();
    
    const mockMulitpleTracks = [
        {trackId: 1,
        trackName: "21",
        artistName: "Polo G",
        collectionName: "The Goat",
        artworkUrl100: theGoat}
        ,
         { trackId: 2, 
            trackName: "Pop Out", 
            artistName: "Polo G", 
            collectionName: "Die A Legend", 
            artworkUrl100: theGoat }
    ]
   
    it("should render a track", () => {
        const wrapper = shallow(<TrackList tracks={mockMulitpleTracks} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper).toHaveLength(1);
    })

    it("should render a trackList", () => {
        const wrapper = shallow(<TrackList tracks={mockMulitpleTracks} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.find('li')).toHaveLength(2);
    })
    it("should render no tracks", () => {
        const wrapper = shallow(<TrackList tracks={[]} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.find('li')).toHaveLength(0);
    })
    it("checks whether a track has recieved the right prop", () => {
        const wrapper = shallow(<TrackList tracks={mockMulitpleTracks} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.at(0).find('Track').at(0).prop('track')).toEqual(mockMulitpleTracks[0]);
    })
})