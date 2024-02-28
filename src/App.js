import { useState } from "react";
import "./App.css";

export default function App() {
  const restaurants = [
    {
      name: "Res A",
      cuisine: "Italian",
      rating: 4.5,
      distance: 2,
    },
    {
      name: "Res B",
      cuisine: "Mexicun",
      rating: 4.0,
      distance: 3,
    },
    {
      name: "Res C",
      cuisine: "Italian",
      rating: 4.5,
      distance: 5,
    },
  ];
  // STATE VARIABLES TO MANAGE SEARCH INPUTS & RESULTS
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // FUNCTION TO FILTER THE RESTAURANTS
  const handleSearch = () => {
    const filtered = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.rating.toString().includes(searchTerm) ||
        restaurant.distance.toString().includes(searchTerm)
    );
    setFilteredRestaurants(filtered);
  };
  console.log(filteredRestaurants);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: "5px" }}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {filteredRestaurants.map((restaurant, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <div>Name: {restaurant.name}</div>
            <div>Cuisine: {restaurant.cuisine}</div>
            <div>Rating: {restaurant.rating}</div>
            <div>Distance: {restaurant.distance} KM</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
