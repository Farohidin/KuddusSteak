import "./basket.scss";
import Shopbox from './Shopbox';

const shop = ({ openShop }) => {
    return (
        <div className="shop">
            <div className="container">
                <div className={`${openShop ? "openShop" : ""} shop__box`}>
                    <div className="basket_box">
                        <Shopbox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default shop