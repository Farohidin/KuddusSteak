import { PiChefHat } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, deleteFromBasket } from '../app/features/BasketSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.value);
  const basketItem = basketItems.find(item => item.id === product.id);

  console.log(basketItems);


  useEffect(() => {
    if (basketItem) {
      setCount(basketItem.count);
    } else {
      setCount(1);
    }
  }, [basketItem]);


  const handleBasket = () => {
    dispatch(addToBasket(product));
  };

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    dispatch(addToBasket({ ...product, count: newCount }));
  }

  const handleDecrement = () => {
    if (count == 1) {
      dispatch(deleteFromBasket(product.id));
    } else {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(addToBasket({ ...product, count: newCount }));
    }
  };
  console.log(product);
  return (
    <div className="menu_box_card" key={product.id}>
      <Link>
        <img className='menu_img' src={product.imgSrc ? product.imgSrc : "./public/logo.png"} alt={product.name} />
      </Link>
      <p className="menu_box_card_price">{product.price} so'm</p>
      <h2 className="menu_box_card_title">{product.name}</h2>
      <p className="menu_box_card_text">{product.description}</p>


      {/* .substring(0, 20) */}

      {basketItem ?
        <div className="counter">
          <button className="counter-btn" onClick={handleDecrement}>-</button>
          <span className="counter-value">{count}</span>
          <button className="counter-btn" onClick={handleIncrement}>+</button>
        </div>
        :
        <button className="menu_box_card_btn" onClick={handleBasket}>
          <h4 h4 className="menu_box_card_btn_title">Eklemek</h4>
          <PiChefHat />
        </button>
      }


      {
        basketItem ? (
          <p className="product-added-message">Yemek eklendi!</p> // Message when added
        ) : (
          <p className="product-added-message remove">Yemek seçilmedi!</p> // Message when removed
        )
      }
    </div >
  );
};


export default ProductCard;
