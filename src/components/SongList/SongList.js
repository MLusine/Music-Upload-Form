import React from "react";
import classes from "./SongList.module.scss";

const SongList = ({ songs }) => {
  return (
    <div className={classes.songList}>
      <div className={classes.songList__container}>
        <table className={classes.songList__table}>
          <thead className={classes.songList__thead}>
            <tr>
              <th className={classes.songList__thead__th1}> </th>
              <th>Song Name</th>
              <th>Artist Name</th>
              <th>Track</th>
              <th className={classes.songList__thead__th5}> </th>
            </tr>
          </thead>
          <tbody className={classes.songList__tbody}>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons} alt="Play Icon" />
                </div>
              </td>
              <td>Hallo</td>
              <td>Blackbird Blackbird</td>
              <td>1</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon"/>
                  <img src="img/confirm.png" className={classes.icons} alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons} alt="Arrow-Right Icon"/>
                  <img src="img/dropdown.jpg" className={classes.icons} alt="Dropdown Icon"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons} alt="Play Icon" />
                </div>
              </td>
              <td>Blind</td>
              <td>Blackbird Blackbird</td>
              <td>2</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon" />
                  <img src="img/confirm.png" className={classes.icons} alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons} alt="Arrow-Right Icon"/>
                  <img src="img/dropdown.jpg" className={classes.icons} alt="Dropdown Icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons} alt="Play Icon"/>
                </div>
              </td>
              <td>Twin Flames</td>
              <td>Blackbird Blackbird</td>
              <td>4</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon"/>
                  <img src="img/confirm.png" className={classes.icons} alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons} alt="Arrow-Right Icon"/>
                  <img src="img/dropdown.jpg" className={classes.icons}  alt="Dropdown Icon"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons} alt="Play Icon"/>
                </div>
              </td>
              <td>Left To Hurt</td>
              <td>Blackbird Blackbird</td>
              <td>5</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon" />
                  <img src="img/confirm.png" className={classes.icons}  alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons} alt="Arrow-Right Icon"/>
                  <img src="img/dropdown.jpg" className={classes.icons} alt="Dropdown Icon"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons} alt="Play Icon" />
                </div>
              </td>
              <td>Starlight</td>
              <td>Blackbird Blackbird</td>
              <td>6</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon"/>
                  <img src="img/confirm.png" className={classes.icons}  alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons}  alt="Arrow-Right Icon"/>
                  <img src="img/dropdown.jpg" className={classes.icons} alt="Dropdown Icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/dots.png" className={classes.icons} alt="Menu Icon"/>
                  <img src="img/play.webp" className={classes.icons}  alt="Play Icon"/>
                </div>
              </td>
              <td>Modern Disbelief</td>
              <td>Blackbird Blackbird</td>
              <td>7</td>
              <td>
                <div className={classes.songList__iconBox}>
                  <img src="img/heart.png" className={classes.icons} alt="Heart Icon"/>
                  <img src="img/confirm.png" className={classes.icons} alt="Confirm Icon"/>
                  <img src="img/arrow-right.png" className={classes.icons} alt="Arrow-Right Icon" />
                  <img src="img/dropdown.jpg" className={classes.icons}  alt="Dropdown Icon"/>
                </div>
              </td>
            </tr>

            {songs.map((song, index) => (
              <tr key={index}>
                <td>
                  <div className={classes.songList__iconBox}>
                    <img src="img/dots.png" className={classes.icons}  alt="Menu Icon"/>
                    <img src="img/play.webp" className={classes.icons} alt="Play Icon"/>
                  </div>
                </td>
                <td>{song.songName}</td>
                <td>{song.artistName} </td>
                <td>{song.track}</td>
                <td>
                  <div className={classes.songList__iconBox}>
                    <img src="img/heart.png" className={classes.icons} alt="Heart Icon" />
                    <img src="img/confirm.png" className={classes.icons} alt="Confirm Icon"/>
                    <img src="img/arrow-right.png" className={classes.icons}  alt="Arrow-Right Icon"/>
                    <img src="img/dropdown.jpg" className={classes.icons} alt="Dropdown Icon"/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SongList;
