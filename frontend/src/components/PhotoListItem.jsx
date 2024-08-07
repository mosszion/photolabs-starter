import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  
  /* Insert React */

  const {setDetail, setDisplayModal, photoInfo} = props;
  const handleClick = () => {
   
    setDisplayModal(),
    setDetail(photoInfo);
          


  };
  return (
    <div className="photo-list__item" key={props.photoInfo.id}>
      <PhotoFavButton
        photoInfoId={props.photoInfo.id}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
      />

      <img
        className="photo-list__image"
        src={props.photoInfo.urls.regular}
        onClick={handleClick}
 
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photoInfo.user.profile}
        />
        <div className="photo-list__user-info">
          <p>{props.photoInfo.user.name}</p>
          <div className="photo-list__user-location">
            <p>
              {props.photoInfo.location.city},{" "}
              {props.photoInfo.location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
