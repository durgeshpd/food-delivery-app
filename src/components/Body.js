import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useOutletContext } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Get reset flag from Outlet context
  const { resetFlag } = useOutletContext() || {};

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Reset when logo is clicked
    if (resetFlag) {
      setSearchText("");
      setFilteredRestaurants(listOfRestaurants);
    }
  }, [resetFlag, listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // Handle dynamic search
  useEffect(() => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchText, listOfRestaurants]);

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      {/* Search and Filter */}
      <div className="filter flex flex-wrap gap-4 items-center justify-center my-6">
        <div className="search flex gap-2">
          <input
            type="text"
            className="search-box px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // Update searchText dynamically
          />
        </div>

        <button
          className="filter-btn px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => {
            const topRated = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Display Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
        {filteredRestaurants.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No restaurants found</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="transform transition duration-200 hover:scale-105"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
