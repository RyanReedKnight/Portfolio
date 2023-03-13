import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  clickAboutHandler:()=>void;
  clickPhotosHandler:()=>void;
}

const Header: FC<HeaderProps> = (props) => { 
  return (
    <nav className={styles.Header} data-testid="Header">
      <button onClick={props.clickAboutHandler}>About</button>
      <button onClick={props.clickPhotosHandler}>Photos</button>
    </nav>
)};

export default Header;