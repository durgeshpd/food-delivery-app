const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 my-2 ">
                    <div>{item.card.info.name}</div>
                    </div>
            ))}
        </div>
    )
};

export default ItemList;