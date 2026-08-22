import React from "react";
import SearchBar from "./SearchBar";
import { shallow, mount } from "enzyme";

describe("it should test the functionality of the SearchBar component", () => {
    const mockOnSearch = jest.fn();
    let wrapper;
     const userInput = 'Polo G';
    beforeEach(() => {
        wrapper = mount(<SearchBar onSearch={mockOnSearch}/>);
        mockOnSearch.mockClear();
    })
    it("renders a searchBar component", () => {
        
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
    })
   
    it("tests whether the user inputted is equal to whats in the input value", () => {
        wrapper.find('input').simulate('change', {
        target: { name: 'input', value: userInput }
        });
        expect(wrapper.find('input').prop('value')).toEqual(userInput);
    })
   

    it("tests whether a valid input was submitted to the form", () => {
        
        wrapper.find('input').simulate('change', {
            target: {name: 'input', value: userInput}
        })
        wrapper.find('form').simulate('submit', { preventDefault: () => {}});
        expect(mockOnSearch).toHaveBeenCalledWith(userInput);
    })
    it("tests whether onSearch is called when an invalid input is submitted into the form", () => {
       
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(mockOnSearch).not.toHaveBeenCalled();
    })
   it("checks whether the button in the form renders with the text 'Search' ", () => {
    
    expect(wrapper.find('button[type="submit"]').text().trim()).toEqual('Search')

   })
})