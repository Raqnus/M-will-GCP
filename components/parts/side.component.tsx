"use client"

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

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleSidebar} className={styles.toggleButton}>
      <MenuIcon font-size="large"/>
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
          
            <CottageIcon />
            <br />
            <a href="/" className="space-y-3">ホーム</a>
          </li>
          <li>
            <QuestionMarkIcon />
            <br />
            <a href="/welcome" className="gap-y-3 ">Welcome</a>
          </li>
          <li>
            <LocationOnIcon />
            <br />
            <a href="/map">Map</a>
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
              <a href="https://x.com/scarab_nail" className={styles.sidebarX}><XIcon /></a>
              <a href="https://www.instagram.com/scarab_nail_52/" className={styles.sidebarI}><InstagramIcon /></a>
              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=086hoytu" className={styles.sidebarL}><PersonAddAlt1Icon /></a>
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
  );
}

export default Sidebar;