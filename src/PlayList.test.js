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
    const mockEmptySaveMessage = '';
    const mockRemoveTrack = jest.fn();
    const userInput = 'New PlayList';
    const oneTrackMessage = '1 track in the playlist.';
    const twoTrackMessage = '2 tracks in the playlist.';

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

     const props = { 
        tracks: mockMultipleTracks,
        isInPlayList: mockIsInPlayList,
        removeTrack: mockRemoveTrack
        };

    it("renders the PlayList component", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage}/>);
        expect(wrapper).toHaveLength(1);

    })

    it("button to be disabled when tracklength is 0", () => {
        const wrapper = shallow(<PlayList tracks={[]} saveMessage={mockSaveMessage}/>);
        expect(wrapper.find('button').prop('disabled')).toEqual(true);
    })

    it("button to be enabled when tracklength is not 0", () => {
        const wrapper = shallow(<PlayList tracks={[track]} saveMessage={mockSaveMessage}/>);
        expect(wrapper.find('button').prop('disabled')).toEqual(false);
    })
    
    it("checks the saveMessage in the p tag renders", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage}/>);
        expect(wrapper.find('p').filterWhere(p => p.text() === mockSaveMessage)).toHaveLength(1);
    })


     it("checks the saveMessage in the p tag  doesn't render", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockEmptySaveMessage}/>);
        expect(wrapper.find('p').filterWhere(p => p.text() === mockSaveMessage)).toHaveLength(0);
    })

    it("passes tracks, removeTrack, and isInPlayList props to TrackList", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} removeTrack={mockRemoveTrack} isInPlayList={mockIsInPlayList} saveMessage={mockSaveMessage}/>);
        expect(wrapper.find('TrackList').props()).toEqual(props);
    })

     it("calls onNameChange with the typed value when input changes", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage} onNameChange={mockOnNameChange}/>);
        wrapper.find('input').simulate('change', {
            target: {name: 'playListName', value: userInput}
        })
        expect(mockOnNameChange).toHaveBeenCalledWith(userInput);
     })

     it("renders input value matching the playListName prop", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage} playListName={playListName}/>);
        expect(wrapper.find('input').prop('value')).toEqual(playListName);
     })
     
     it("checks the p tag string output is 1 track in the playlist.", () => {
        const wrapper = shallow(<PlayList tracks={[track]} saveMessage={mockSaveMessage} />);
        expect(wrapper.find('p').filterWhere(p => p.text() === oneTrackMessage)).toHaveLength(1);
     })

      it("checks the p tag string output is 2 tracks in the playlist.", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage} />);
        expect(wrapper.find('p').filterWhere(p => p.text() === twoTrackMessage)).toHaveLength(1);
     })

     it("the button when clicked runs the mockOnSave function", () => {
        const wrapper = shallow(<PlayList tracks={mockMultipleTracks} saveMessage={mockSaveMessage}  onSave={mockOnSave}/>);
        wrapper.find('button').simulate('click');
        expect(mockOnSave).toHaveBeenCalled();
     })
})
