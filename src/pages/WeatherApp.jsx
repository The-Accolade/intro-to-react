import Search from "../components/weatherComponents/Search";

function WeatherApp() {
  const handleSearch = (searchData) => {
    console.log(searchData);
  };

  return <Search onSearchChange={handleSearch} />;
}

export default WeatherApp;
