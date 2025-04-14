const Help = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Help & Support</h1>

            <p className="text-gray-600 mb-8">
                Need assistance? We're here to help! Check out the FAQs below or reach out to our support team.
            </p>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">How do I place an order?</h2>
                    <p className="text-gray-600">
                        Browse your favorite restaurants or grocery items, add them to your cart, and proceed to checkout. It's that easy!
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Can I cancel or modify my order?</h2>
                    <p className="text-gray-600">
                        Yes, but only before the restaurant or store starts preparing it. Go to your orders and tap "Cancel" if available.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">How can I contact customer support?</h2>
                    <p className="text-gray-600">
                        You can reach us anytime at <span className="text-blue-600">support@foodapp.com</span> or call us at <span className="text-blue-600">1800-123-4567</span>.
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-700">Still need help?</p>
                <button 
                  onClick={() => window.location.href = 'mailto:support@foodapp.com'} 
                  className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Contact Support
                </button>
            </div>
        </div>
    );
};

export default Help;
