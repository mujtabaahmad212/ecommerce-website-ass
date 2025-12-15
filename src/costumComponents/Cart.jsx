import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity, clearCart } = useCart();

    if (cartCount === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="page-header">
                    <h1 className="gradient-text animate-fadeInUp">Shopping Cart</h1>
                    <div className="breadcrumb animate-fadeInUp delay-200">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Cart</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fadeInUp">
                    <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8">
                        <FiShoppingBag className="text-5xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                        Start Shopping <FiArrowRight />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="gradient-text animate-fadeInUp">Shopping Cart</h1>
                <div className="breadcrumb animate-fadeInUp delay-200">
                    <a href="/">Home</a>
                    <span>/</span>
                    <span>Cart</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1 animate-fadeInLeft">
                        <div className="card">
                            {/* Header */}
                            <div className="p-6 border-b flex justify-between items-center">
                                <h2 className="text-xl font-bold">Cart Items ({cartCount})</h2>
                                <button
                                    onClick={clearCart}
                                    className="text-red-500 hover:text-red-600 font-semibold text-sm"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* Items List */}
                            <div className="divide-y">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="p-6 flex gap-6 items-center stagger-item">
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-xl"
                                        />

                                        {/* Info */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                            <p className="text-green-600 font-semibold">${item.price}</p>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center border-2 border-gray-200 rounded-xl">
                                            <button
                                                onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <FiMinus />
                                            </button>
                                            <span className="px-4 font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>

                                        {/* Total */}
                                        <div className="text-right w-24">
                                            <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>

                                        {/* Remove */}
                                        <button
                                            onClick={() => removeFromCart(item.name)}
                                            className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                                        >
                                            <FiTrash2 className="text-xl" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96 animate-fadeInRight">
                        <div className="card p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax (10%)</span>
                                    <span className="font-semibold">${(cartTotal * 0.1).toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="flex justify-between text-xl">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold gradient-text">${(cartTotal * 1.1).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Promo Code</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="form-input flex-1"
                                    />
                                    <button className="btn-secondary text-sm px-4">Apply</button>
                                </div>
                            </div>

                            <button className="btn-primary w-full flex items-center justify-center gap-2 mb-4">
                                Proceed to Checkout <FiArrowRight />
                            </button>

                            <Link to="/shop" className="block text-center text-green-600 font-semibold hover:underline">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
