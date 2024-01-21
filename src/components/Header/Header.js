import React from "react";
import classes from "./Header.module.css";
import classNames from "classnames";

const Header = () => {
  const handleAllSongs = () => {
    console.log("Play All Songs");
  };
  const handleAllAddedSongs = () => {
    console.log("All Added Songs");
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__nav}>
          <div className={classes.header__nav__Buttons}>
            <img src="img/play.webp" className={classes.icons} alt="Play Icon"/>
            <button
              className={classes.header__nav__Buttons__allBtns}
              onClick={handleAllSongs}
            >
              Play All
            </button>

            <img src="img/dropdown.jpg" className={classes.dropdownIcon} alt="Dropdown Icon"/>
          </div>
          <div className={classes.header__nav__Buttons}>
            <img src="img/plus.png" className={classes.icons} alt="Plus Icon"/>
            <button
              className={classes.header__nav__Buttons__allBtns}
              onClick={handleAllAddedSongs}
            >
              Add All
            </button>

            <img src="img/dropdown.jpg" className={classes.dropdownIcon} alt="Dropdown Icon"/>
          </div>
        </div>
        <div className={classes.header__nav}>
          <div className={classes.header__nav__Buttons}>
            <img src="img/upAndDown.jpg" className={classes.icons} alt="UpAndDown Icon"/>
            <button className={classes.header__nav__Buttons__allBtns}>
              Track Nu...
            </button>
            <img src="img/dropdown.jpg" className={classes.dropdownIcon} alt="Dropdown Icon" />
          </div>
          <div
            className={classNames(
              classes.header__nav__Buttons,
              classes.searchBox
            )}
          >
            <img src="img/search.png" className={classes.icons} alt="Search Icon"/>
            <input
              placeholder="Filter"
              className={classes.header__nav__Buttons__inp}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
