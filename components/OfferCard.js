import style from "./../styles/OfferCard.module.css";

const OfferCard = ({title, description, children, ...rest}) => {
  return (
    <div className={style.card_container}>
        <div className={style.card_title}>{title}</div>
        <div className={style.card_desc}>{description}</div>
        {children}
    </div>
  )
}

export default OfferCard;