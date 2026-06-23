import React from "react";
import Track from "./Track";
import { shallow } from "enzyme";
import theGoat from "./Images/thegoat.jpg";

describe("it should render a track", () => {
    const mockAddTrack = jest.fn();
    const mockIsInPlayListTrue = () => true;
    const mockIsInPlayList = () => false;
    const mockRemoveTrack = jest.fn();
    const mockTrack = {
        trackId: 1,
        trackName: "21",
        artistName: "Polo G",
        collectionName: "The Goat",
        artworkUrl100: theGoat
    }

    it("renders a track", () => {
        const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
       expect(wrapper).toHaveLength(1);
    })

    it("displays the track details", () => {
        const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
       expect(wrapper.find('p').at(0).text()).toEqual(mockTrack.trackName);
       expect(wrapper.find('p').at(1).text()).toEqual(mockTrack.artistName);
       expect(wrapper.find('p').at(2).text()).toEqual(mockTrack.collectionName);
    })
    
    it("displays the album image", () => {
        const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.find('img').prop('src')).toEqual(mockTrack.artworkUrl100);
    })

    it("shows add in the button", () => {
        const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
        expect(wrapper.find('button').at(0).text().trim()).toEqual("Add");
    })
    
    it("shows added in the button", () => {
    const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayListTrue}/>);
    expect(wrapper.find('button').at(0).text().trim()).toEqual("Added");
    })
    
    it("disables the button when track is in playlist", () => {
        const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayListTrue}/>);
        expect(wrapper.find('button').at(0).prop('disabled')).toBe(true);
    })

    it("only renders remove button when removeTrack prop is passed", () => {
    const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList}/>);
    expect(wrapper.find('button')).toHaveLength(1);
    const wrapperWithRemove = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList} removeTrack={mockRemoveTrack}/>);
    expect(wrapperWithRemove.find('button')).toHaveLength(2);
    })

    it("calls removeTrack when remove button is clicked", () => {
     const wrapper = shallow(<Track track={mockTrack} addTrack={mockAddTrack} isInPlayList={mockIsInPlayList} removeTrack={mockRemoveTrack}/>);
     wrapper.find('button').at(1).simulate('click');
     expect(mockRemoveTrack).toHaveBeenCalledWith(mockTrack);
    })
});