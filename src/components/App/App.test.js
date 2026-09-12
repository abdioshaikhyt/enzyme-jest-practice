import { validateFileName } from "./App";
import { shallow, mount } from "enzyme";
import App from "./App";
import theGoat from "../../Images/thegoat.jpg";
describe( "it should test the full functionality of the App file",() => {

     const mockTrack = {
            trackId: 1,
            trackName: "21",
            artistName: "Polo G",
            collectionName: "The Goat",
            artworkUrl100: theGoat
        }
    it("is testing whenever an empty string is passed in to validateFileName it should return playlist",()=> {
        expect(validateFileName("")).toEqual("playlist");
    })
    it("is testing when a string with whitespaces on either end so before or after the final character is removed and any spaces in between characters are replaced with dahses", () => {
        expect(validateFileName(" My Playlist ")).toEqual("My-Playlist");
    })
    it("tests the addTrack functionality ensuring it works as intended", () => {
        const wrapper = shallow(<App/>);
        const addTrackFn = wrapper.find('SearchResults').prop('addTrack');
        addTrackFn(mockTrack);
        expect(wrapper.find('PlayList').prop('tracks')).toEqual(expect.arrayContaining([mockTrack]));
    })
})
