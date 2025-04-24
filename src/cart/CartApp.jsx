import { Trash2 } from "lucide-react";
import React from "react";
import { isElement } from "react-dom/test-utils";
import { useForm } from "react-hook-form";

const CartApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [Cart, setCart] = React.useState([]);

  const addItem = (data) => {
    const existingItem = Cart.find((item) => item.name === data.name);

    if (existingItem) {
      setCart(
        Cart.map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...Cart,
        {
          ...data,
          name: data.name,
          price: parseFloat(data.price),
          quantity: 1,
        },
      ]);
    }
  };

  // increase quantity
  const increaseQuantity = (name) => {
    setCart(
      Cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease quantity
  const decreaseQuantity = (name) => {
    setCart(
      Cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  // remove item
  const removeItem = (name) => {
    setCart(Cart.filter((item) => item.name !== name));
  };

  // total price
  const totalPrice = Cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  return (
    <div className="w-2/3 mx-auto rounded-2xl bg-gray-200 p-6 shadow-lg mt-20">
      <form onSubmit={handleSubmit(addItem)} className="space-y-4 mb-8">
        <header className="text-2xl font-bold text-center text-gray-500">
          Cart App
        </header>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Item name"
          className="border-2 border-gray-500 rounded-md w-full p-2 "
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Item price"
          className="border-2 border-gray-500 rounded-md w-full p-2 "
        />
        {errors.price && (
          <span className="text-red-500">Price is required</span>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full "
        >
          Add to cart
        </button>
      </form>

      {/* cart items show  */}

      {Cart.length > 0 ? (
        <>
          {Cart.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg p-4 flex items-center justify-between mt-2"
            >
              <p className="font-semibold text-gray-700 ">{item.name}</p>
              <p className="font-semibold text-gray-500 text-sm">
                {(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.name)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.name)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.name)}
                className="text-red-500 "
              >
                <Trash2 />
              </button>
            </div>
          ))}

          <div className="mt-4 bg-white p-4 rounded-lg ">
            <p className="font-bold text-gray-700 ">Total price : ${totalPrice.toFixed(2)} </p>
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center text-gray-500">
            No items in the cart
          </h1>
        </div>
      )}
    </div>
  );
};

export default CartApp;
