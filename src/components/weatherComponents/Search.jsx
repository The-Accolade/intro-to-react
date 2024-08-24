import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { url, apiOptions } from "../../helpers/weather-api";
// const react = {
//     useState: () => {
//         return [
//             nameOfStateYouWantToCreate(defualtValue),
//             functionThatUpdatesTheState(){

//             }
//         ]
//     }
// }

function Search({ onSearchChange }) {
  const [searchText, setSearchText] = useState(null);

  const handleChange = (searchData) => {
    setSearchText(searchData); //updating the setSearchText and we are searching the word provided into the function
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => { //async/await
    try {
      const response = await fetch(
        `${url}?namePrefix=${inputValue}`,
        apiOptions
      );
      const result = await response.json(); 
      if (response.ok) {
        return {
          options: result.data.map((item) => {
            return {
              value: `${item.latitude} ${item.longitude}`,
              label: `${item.name}, ${item.countryCode}`,
            };
          }),
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={500}
        value={searchText} //gets the text that is typed into the search component
        onChange={handleChange} //holds the function that handles what happens when we begin to type
        loadOptions={loadOptions} //holds the function that does the API call
      />
    </div>
  );
}

export default Search;
