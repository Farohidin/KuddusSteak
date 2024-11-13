import "./basket.scss"
import { MdDelete } from "react-icons/md";
import ShopBoxCard from "../Components/ShopBoxCard";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

const Shopbox = ({ setOpenShop }) => {
    const shop = useSelector((state) => state.basket.value)
    return (
        <div className='shopbox'>
            <div className="container">
                <span className="shopbox__icon" onClick={() => setOpenShop(false)} ><ImCross /></span>
                {shop.map((item) => (
                    <ShopBoxCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Shopbox