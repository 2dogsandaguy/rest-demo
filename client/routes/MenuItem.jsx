import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css';
import macCheese from "/images/mac-and-cheese.jpg" 
import bakedBean from "/images/Baked-Beans_015.jpg"
import wings from "/images/bbq-chicken-wings.jpg"
import pulledPork from "/images/pulled-pork-sandwich.jpg"
const Menu = () => {
  const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);
  
    const addItemToOrder = (item) => {
      setSelectedItems([...selectedItems, item]);
      console.log('Selected Items after update:', selectedItems);console.log(setSelectedItems, "hello")
      navigate('/OrderPage'); 
    };
  const menuItems = [
    {
      category: 'Sides',
      items: [
        { name: 'Mac And Cheese', description: 'Homemade breaded mac and cheese ',image:macCheese, chef: 'Bernie' },
        { name: 'Baked Beans', description: 'Sweet, smoky and bacony with a little zing...',image:bakedBean , chef: 'Justin' },
        // Add more side items as needed
      ],
    },
    {
      category: 'Meats',
      items: [
        { name: 'BBQ Chicken Wings', description: 'Crispy baked chicken wings smothered in a sweet and tangy homemade barbecue sauce...', image:wings, chef: 'Nicky' },
        { name: 'Pulled Pork Sandwich', description: 'These Root Beer Pulled Pork Sandwiches are made from only 3 ingredients...',image: pulledPork, chef: 'Christy' },
        // Add more meat items as needed
      ],
    },
    {
      category: 'Drinks',
      items: [
        // Add drink items here
      ],
    },
    // Add more categories as needed
  ];

  return (
    
    <div className="container mt-5">
      <h2 className="text-center mb-4">The Best American BBQ Dishes</h2>

      {menuItems.map(category => (
        <div key={category.category} className="category">
          <h3 className="text-uppercase">{category.category}</h3>
          {category.items.map(item => (
            <div key={item.name} className="dish">
              <h4>{item.name}</h4>
              <img src={item.image} alt={item.name} className="dish-image" />
              <p>{item.description}</p>
              <p className="chef">Recipe created by {item.chef}.</p>
              <Link to="/orderPage" onClick={() => addItemToOrder(item)}>
                Add to Order
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
