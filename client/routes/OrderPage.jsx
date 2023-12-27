import  { useState, useEffect } from 'react';

const OrderPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItemToOrder = (item) => {
    setSelectedItems([...selectedItems, item]);
    console.log('Selected Items in Menu:', selectedItems);
  };

  useEffect(() => {
    console.log('Selected Items:', selectedItems);
  }, [selectedItems]);

  return (
    <div className="container mt-5">
      <h2>Your Order</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
