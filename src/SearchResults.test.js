import SearchResults from "./SearchResults";
import { shallow, mount } from "enzyme";
import React from 'react';
import theGoat from "./Images/thegoat.jpg";
import dieALegend from "./Images/die-a-legend.jpg";

describe("it should test the functionality of the SearchResults component", () => {
    const mockAddTrack = jest.fn();
    const mockIsInPlayListTrue = () => true;
    const mockIsInPlayList = () => false;
     const mockMultipleTracks = [
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
        ];
        const props = { 
        tracks: mockMultipleTracks,
        addTrack:mockAddTrack, 
        isInPlayList: mockIsInPlayList 
        };

    it("it tests if the SearchResults can load without crashing ", () => {
         const wrapper = shallow(<SearchResults/>);
    expect(wrapper).toHaveLength(1);
    });
    it("it should pass props from searchResults component down to the trackList component", () => {
        const wrapper = shallow(<SearchResults  tracks = {mockMultipleTracks} addTrack = {mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.find('TrackList').props()).toEqual(props);
    });
it("should render the correct number of tracks", () => {
    const wrapper = shallow(<SearchResults  tracks = {mockMultipleTracks} addTrack = {mockAddTrack} isInPlayList={mockIsInPlayList}/>);
    expect(wrapper.find('TrackList').prop('tracks')).toHaveLength(mockMultipleTracks.length);
})
});