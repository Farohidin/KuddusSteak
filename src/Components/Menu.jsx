import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Shop from '../Page/Shop';
import { PiChefHat } from "react-icons/pi";
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { yemek } from "../Service/api";
import { PiBowlFoodBold } from "react-icons/pi";

const Menu = () => {
   const [openShop, setOpenShop] = useState(false)
   const count = useSelector((state) => state.basket.value.length);

   const categories = [
      { id: 'kahvalti', title: 'Kahvaltı', data: yemek.kahvalti },
      { id: 'corba', title: 'Çorbalar', data: yemek.corbalar },
      { id: 'AraSıcaklar', title: 'Ara Sıcaklar', data: yemek.siciklar },
      { id: 'salatalar', title: 'Salatalar', data: yemek.salatalar },
      { id: 'pide', title: 'Pide Çeşitleri', data: yemek.pide },
      { id: 'burger', title: 'Burgerler', data: yemek.burger },
      { id: 'spaghetti', title: 'Spaghettiler', data: yemek.spaghetti},
      { id: 'pizza', title: 'Pizza', data: yemek.pizza},
      { id: 'doner', title: 'Donerler', data: yemek.doner},
      { id: 'kebaplar', title: 'Kebaplar', data: yemek.kebaplar},
      { id: 'tava', title: 'Tava Yemekler', data: yemek.tava},
      { id: 'shef', title: 'Şef Yemekleri', data: yemek.shef},
      { id: 'steak', title: 'Steakler', data: yemek.steak},
      { id: 'tatli', title: 'Tatlilar', data: yemek.tatli},
      { id: 'ekmek', title: 'Ekmekler', data: yemek.ekmek},
      { id: 'suv', title: 'Içecekler', data: yemek.suv},
   ];

   return (
      <div className="menu">
         <Sidebar />
         <div className="menu_box">
            <div className="div_card">
               <span className="div_card_link_span div_card_link_span1" onClick={() => setOpenShop(!openShop)}>
                  <PiBowlFoodBold />
               </span>
               {/* <Link className="div_card_link" to="/basket">
                  <span className="div_card_link_span">
                     <PiChefHat />
                  </span>
                  <span className="div_card_link_span_sp">{count}</span>
               </Link> */}
            </div>
            <Shop openShop={openShop} />

            {categories.map(category => (
               <div key={category.id} id={category.id}>
                  <h2  className="menu-title" >{category.title}</h2>
                  <div className="menu_box_cards">
                     {category.data.map(product => (
                        <ProductCard key={product.id} product={product} />
                     ))}
                  </div>
               </div>
            ))}
            </div>
            {/* <div className="ichimlik">
               <h2 >sa</h2>
         </div> */}
      </div >
   );
};

export default Menu;
