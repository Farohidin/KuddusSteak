import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToBasket, deleteFromBasket } from "../app/features/BasketSlice";
import { Link } from "react-router-dom";

const ShopBoxCard = ({ item }) => {
    const dispatch = useDispatch()
    const { id, name, price, imgSrc, count: oldCount } = item
    const [count, setCount] = useState(1);
    // const handleIncrement = () => setCount(count + 1);
    // const handleDecrement = () => setCount(count > 1 ? count - 1 : 1);

    useEffect(() => {
        setCount(oldCount);
    }, [oldCount]);


    const handleDelete = () => {
        dispatch(deleteFromBasket(id))
    }

    const handleIncrement = () => {
        const newCount = count + 1
        setCount(newCount)
        dispatch(addToBasket({ ...item, count: newCount }));
    }

    const handleDecrement = () => {
        console.log('asd');
        if (count == 1) {
            dispatch(deleteFromBasket(item.id));
        } else {
            const newCount = count - 1;
            setCount(newCount);
            dispatch(addToBasket({ ...item, count: newCount }));
        }
    };

    return (
        <div className="shopbox__div">
            <div className="shopbox__img-div">
                <span className="shopbox__icon" onClick={handleDelete}><MdDelete /></span>
                <img className='shopbox__img' src={imgSrc} alt="" />
                
                <div>
                    <h2 className="shopbox__title">{name}</h2>
                    <p className="shopbox__price">{price}</p>
                </div>
            </div>
            <div className="counter">
                <button className="counter-btn" onClick={handleDecrement}>-</button>
                <span className="counter-value">{count}</span>
                <button className="counter-btn" onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default ShopBoxCard