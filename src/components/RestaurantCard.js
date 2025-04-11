const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

    return (
        <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <img
                className="w-full h-40 object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <h5 className="text-sm text-gray-600 mt-1 truncate">{cuisines.join(", ")}</h5>
                <h5 className="text-sm text-yellow-500 font-medium mt-1">⭐ {avgRating}</h5>
            </div>
        </div>
    );
};

export default RestaurantCard;
