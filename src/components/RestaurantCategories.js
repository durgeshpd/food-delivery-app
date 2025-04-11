import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div className="w-full mx-auto my-2 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold cursor-pointer">{data.title} ({data.itemCards.length})</span>
                    <span className="cursor-pointer">🔽</span>
                </div>

                <div className="flex justify-center">
                    {showItems && <ItemList items={data.itemCards} />}
                </div>

            </div>

        </div>
    )
}

export default RestaurantCategories;