import React, { useState } from "react";
import classes from "./MusicUploadForm.module.scss";
import SongList from "../SongList/SongList";

const MusicUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [songList, setSongList] = useState([]);

  const handleFileChange = (event) => {
    console.log("event");
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    console.log("File Uploaded Successfully");
    if (selectedFile) {
      setUploading(true);

      setTimeout(() => {
        setUploading(false);

        const newSong = {
          songName: "Song Name",
          artistName: "Artist Name",
          track: "Track",
        };

        setSongList((prevSongList) => [...prevSongList, newSong]);

        setSelectedFile(null);
        alert("File uploaded successfully!");
      }, 2000);
    }
  };

  return (
    <div className={classes.MusicUploadForm}>
      <SongList songs={songList} />

      <div className={classes.MusicUploadForm__container}>
        <div className={classes.MusicUploadForm__uploadBox}>
          <input
            type="file"
            accept=".mp3, .wav"
            onChange={handleFileChange}
            className={classes.MusicUploadForm__uploadInput}
          />
          {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>} */}

          <button
            onClick={handleUpload}
            // disabled={!selectedFile || uploading}
            className={classes.MusicUploadForm__uploadBox__btn}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          {uploading && (
            <div>
              Uploading progress:
              <div />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MusicUploadForm;
