import PlayList from "./PlayList";
import React from "react";
import { shallow, mount } from "enzyme";
import theGoat from "./Images/thegoat.jpg";
import dieALegend from "./Images/die-a-legend.jpg";
import TrackList from "./trackList";

describe("it should test the PlayList component functionality", () => {
    const mockIsInPlayList = () => false;
    const mockOnNameChange = jest.fn();
    const mockOnSave = jest.fn();
    const mockSaveMessage = "Your Playlist has been saved";
    const removeTrack = jest.fn();
    const playListName = "My-Fav";

    const track = {trackId: 1,
                trackName: "21",
                artistName: "Polo G",
                collectionName: "The Goat",
                artworkUrl100: theGoat
            };

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
    it("renders the PlayList component", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage}/>);
        expect(wrapper).toHaveLength(1);

    })

    
});
