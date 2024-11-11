import { useState } from "react"
import "./basket.scss"
import { MdDelete } from "react-icons/md";
import ShopBoxCard from "../Components/ShopBoxCard";
import { useSelector } from "react-redux";

const Shopbox = () => {
    const shop = useSelector((state) => state.basket.value)
    console.log(shop);

    return (
        <div className='shopbox'>
            <div className="container">
                {shop.map((item) => (
                    <ShopBoxCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Shopbox