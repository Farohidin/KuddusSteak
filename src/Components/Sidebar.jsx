import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_box">
        <img className="sidebar_box_img" src="./logo.png" alt="" />
        <ul className="sidebar_box_ul">
          <li><a href='#kahvalti' className="sidebar_box_ul_li">Kahvaltı</a></li>
          <li><a href='#corba' className="sidebar_box_ul_li">Çorbalar</a></li>
          <li><a href='#AraSıcaklar' className="sidebar_box_ul_li">Ara sıcaklar</a></li>
          <li><a href='#salatalar' className="sidebar_box_ul_li">Salatalar</a></li>
          <li><a href='#pide' className="sidebar_box_ul_li">Pide Çeşitleri</a></li>
          <li><a href='#burger' className="sidebar_box_ul_li">Burger</a></li>
          <li><a href='#spaghetti' className="sidebar_box_ul_li">Spagettiler</a></li>
          <li><a href='#pizza' className="sidebar_box_ul_li">Pizzalar</a></li>
          <li><a href='#doner' className="sidebar_box_ul_li">Dönerler</a></li>
          <li><a href='#kebaplar' className="sidebar_box_ul_li">Kebaplar</a></li>
          <li><a href='#tava' className="sidebar_box_ul_li">Tava yemekler</a></li>
          <li><a href='#shef' className="sidebar_box_ul_li">Şef yemekleri</a></li>
          <li><a href='#steak' className="sidebar_box_ul_li">Steakler</a></li>
          <li><a href='#tatli' className="sidebar_box_ul_li">Tatlılar</a></li>
          <li><a href='#ekmek' className="sidebar_box_ul_li">Ekmekler</a></li>
          <li><a href='#suv' className="sidebar_box_ul_li">Içecekler</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
