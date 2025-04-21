const Cart = ({ CartItems, onClear, onRemove }) => {
  return (
    <div>
      <ul className="m-5 list-disc list-inside">
        {CartItems.map((item) => (
          <li
            onClick={() => onRemove(item)}
            key={item}
            className="cursor-pointer hover:text-red-600"
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={onClear}
        className="px-3 py-2 bg-blue-500 text-white rounded-sm ml-5 cursor-pointer"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
