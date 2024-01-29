import { Photo } from "../../components/Photo/Photo";
import { useAppSelector } from "../../hooks/redux";
import { getPhotosSelector } from "../../redux/photos/selector";
import styles from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  const { favoritesPhoto } = useAppSelector(getPhotosSelector);
  return (
    <div className={styles.container}>
      {favoritesPhoto.map((cat) => (
        <Photo cat={cat} key={cat.id} />
      ))}
    </div>
  );
};
