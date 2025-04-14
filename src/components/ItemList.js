import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice"; // ✅ make sure removeItem exists

const ItemList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const info = item.card.info;
        const price = (info.price || info.defaultPrice) / 100;

        return (
          <div
            key={info.id}
            className="p-4 border-b flex justify-between items-start gap-4"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {info.name}
              </h3>
              <p className="text-base font-medium text-green-700 mt-1">
                ₹{price}
              </p>
              <p className="text-sm text-gray-600 mt-1">{info.description}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                className={`${
                  showAddButton
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-red-500 hover:bg-red-600"
                } text-white px-3 py-1 text-sm rounded transition`}
                onClick={() =>
                  showAddButton ? handleAddItem(item) : handleRemoveItem(item)
                }
              >
                {showAddButton ? "Add +" : "Remove -"}
              </button>
              {info.imageId && (
                <img
                  src={IMG_CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-24 h-24 object-cover rounded"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
