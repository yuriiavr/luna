import css from './Header.module.css';
import React, { useState } from 'react';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Link } from 'react-router-dom';

export const Header = () => {

    const [open, setOpen] = useState(false);

    const body = document.getElementsByTagName("body")[0];

    const handleOpen = () => {
        setOpen(!open);
        body.classList.toggle("menu-open")
    };

    let menuImg = require('../../images/open.png')

    if (open === true) {
        menuImg = require('../../images/close.png')
    }

    return (
      <header className={css.header}>
        <div className={css.header_cont}>
          <Link className={css.logo} to="/">
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  L <span style={{ color: "rgb(0, 183, 255)" }}>U</span>
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  N <span style={{ color: "yellow" }}>A</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "4px",
                  marginLeft: "5px",
                }}
              >
                <span className={css.underletter}>LoL</span>
                <span className={css.underletter}>Ukrainian</span>
                <span className={css.underletter}>News</span>
                <span className={css.underletter}>App</span>
              </div>
            </div>
          </Link>
          <div className={css.burgerButton}>
            <button
              onClick={handleOpen}
              type="button"
              className={css.menuButton}
            >
              <img
                style={{
                  width: "25px",
                  position: "absolute",
                  right: "25px",
                  top: "20px",
                }}
                src={menuImg}
                alt="menu"
              />
            </button>
            {open ? <HeaderNav /> : null}
          </div>
          <div className={css.deskNav}>
            <HeaderNav />
          </div>
        </div>
      </header>
    );
};