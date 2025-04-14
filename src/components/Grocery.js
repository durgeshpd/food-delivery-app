const Grocery = () => {
    const groceryItems = [
        { id: 1, name: 'Fresh Apples', description: 'Crisp and sweet.', price: '₹120 / kg' },
        { id: 2, name: 'Organic Bananas', description: 'Naturally ripened.', price: '₹40 / dozen' },
        { id: 3, name: 'Milk', description: '2% Reduced Fat, 1 Litre', price: '₹60' },
        { id: 4, name: 'Bread', description: 'Whole grain, fresh baked.', price: '₹35' },
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Grocery</h1>

            <p className="text-gray-600 mb-8">
                Get your daily essentials delivered fresh and fast.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {groceryItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-green-600 font-medium">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grocery;
