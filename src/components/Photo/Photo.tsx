import styles from "./Photo.module.css";
import { PhotoProps } from "./Photo.type";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { isFavoritesPhoto } from "../../redux/photos/photosSlice";
import { getPhotosSelector } from "../../redux/photos/selector";
import heart from "../../assets/svg/heart.svg";
import activeHeart from "../../assets/svg/activeHeart.svg";

export const Photo = ({ cat }: PhotoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const { favoritesPhoto } = useAppSelector(getPhotosSelector);

  const clickHandler = () => {
    dispatch(isFavoritesPhoto(cat));
  };

  const favorite =
    favoritesPhoto.findIndex((photo) => photo.url === cat.url) !== -1;

  return (
    <div
      className={
        !isHovered
          ? `${styles.border}`
          : `${styles.border} ${styles.border__active}`
      }
    >
      <div
        className={styles.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={clickHandler}
      >
        <img
          src={`${cat.url}`}
          width={225}
          height={225}
          alt={`${cat.breeds}`}
        />
        {(isHovered || favorite) && (
          <div className={`${styles.heart} ${styles.heart__active}`}>
            <img src={favorite ? `${activeHeart}` : `${heart}`} alt="heart" />
          </div>
        )}
      </div>
    </div>
  );
};
