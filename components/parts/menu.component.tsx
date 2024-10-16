'use client';  // この行を追加して、クライアントコンポーネントに指定

import Shop from '@mui/icons-material/ShoppingCartRounded';
import Mail from '@mui/icons-material/EmailRounded';
import Home from '@mui/icons-material/HomeOutlined';
import Company from '@mui/icons-material/Apartment';
import React, { useState } from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import styles from '/styles/side.module.css'; // パスと拡張子を確認
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Material Iconsのインポート



export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    
    setIsOpen(!isOpen);
  };


  return (
    <nav className="z-50 mx-auto">
      <div className="max-w-7xl flex justify-between items-center">
        {/* ロゴ部分 */}

        {/* 通常のテキストメニュー（PC表示用） */}
        <div className="hidden md:flex gap-x-10 lg:mt-8 mt-4 ml-8">
          
          <a href="/" className="text-slate-950 hover:text-teal-500 duration-200"><Home/>ホーム</a>
          <a href="https://hidamari-meal.stores.jp/" className="text-slate-950 hover:text-teal-500 duration-200"><Shop/>公式通販ショップ</a>
          <a href="/company" className="text-slate-950 hover:text-teal-500 duration-200"><Company/>企業情報</a>
          <a href="https://hidamari-meal.stores.jp/inquiry" className="text-slate-950 hover:text-teal-500 duration-200"><Mail/>お問い合わせ</a>
        </div>




        <div className=" md:hidden text-slate-950">
      <button onClick={toggleSidebar} className={styles.toggleButton}>
      <MenuIcon className=" text-slate-950 mr-12 mt-3" font-size="large"/>
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul className="rozha-one-regular mx-auto">

          <li>
            <nav className="text-left">
              <button onClick={toggleSidebar} className={`${styles.toggleButton} ${styles.closeButton}`}>
                <CloseIcon className="font-size=large"/>
              </button>
              <br />
            </nav>
          
            <Home/>
            <br />
            <a href="/" className="space-y-3">ホーム</a>
          </li>
          <li>
          <Shop/>
            <br />
            <a href="https://hidamari-meal.stores.jp/" className="gap-y-3 ">公式通販ショップ</a>
          </li>
          <li>
            <Company/>
            <br />
            <a href="/company">企業情報</a>
          </li>
          <li>
          <Mail/>
            <br />
            <a href="https://hidamari-meal.stores.jp/inquiry" className="gap-y-3 ">お問い合わせ</a>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <div className="">
            <h1 className="flex ">
              <a href="https://www.instagram.com/scarab_nail_52/" className={styles.sidebarI}><InstagramIcon /></a>
            </h1>
          </div>
          <br />
          <br />
          <nav>
            <p></p>
          </nav>
        </ul>
      </div>
    </div>

      </div>
    </nav>
  );
}
