import css from './ImageCard.module.css';
export default function ImageCard({ item, openModal }) {
  console.log(openModal);

  return (
      <img onClick={() => openModal(item.cover_photo.urls.regular)}
        className={css.img}
        src={item.cover_photo.urls.small}
        alt={item.cover_photo.alt_description}
      />
  );
}
