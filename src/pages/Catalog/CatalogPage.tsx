import { useInView } from "react-intersection-observer";
import { Photo } from "../../components/Photo/Photo";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPhotosSelector } from "../../redux/photos/selector";
import styles from "./CatalogPage.module.css";
import { LoaderError } from "../../ui/LoaderError/LoaderError";
import { useEffect } from "react";
import { fetchPhotos } from "../../redux/photos/getPhotos";
import { Status } from "../../redux/@types/enum";

export const CatalogPage = () => {
  const { openPhotos, status } = useAppSelector(getPhotosSelector);
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      dispatch(fetchPhotos());
    }
  }, [dispatch, inView]);

  return (
    <>
      <div className={styles.container}>
        {openPhotos.map((cat) => (
          <Photo cat={cat} key={cat.id} />
        ))}
      </div>

      <div ref={ref} className={styles.loader}>
        {status !== Status.fulfilled && <LoaderError status={status} />}
      </div>
    </>
  );
};
