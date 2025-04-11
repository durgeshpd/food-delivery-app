import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { Menu_API } from "../utils/constants";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const restaurant = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories);
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Info */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-orange-600">{restaurant?.name}</h1>
        <p className="text-gray-600">{restaurant?.cuisines?.join(", ")}</p>
      </div>

      {/* Categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategories key={category.card.card.categoryId} data={category?.card?.card} 
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
