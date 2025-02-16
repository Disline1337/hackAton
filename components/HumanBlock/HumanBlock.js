import style from "./HumanBlock.module.css";

export default function HumanBlock({ props, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick(props);
        }
    };

    return (
        <div className={style.HumanBlock} onClick={handleClick}>
            {props.image && (
                <div className={style.imageContainer}>
                    <img
                        src={props.image}
                        alt={props.name}
                        className={style.image}
                    />
                </div>
            )}

            <div className={style.content}>
                <h3 className={style.name}>{props.name}</h3>

                <div className={style.infoRow}>
                    <div className={style.infoItem}>
                        <h4 className={style.infoTitle}>Basic Information</h4>
                        <p className={style.text}>{props.description}</p>
                    </div>

                    <div className={style.infoItem}>
                        <h4 className={style.infoTitle}>Date and Place of Birth</h4>
                        <p className={style.text}>
                            {props.DateAndPlaceOfBirth?.join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}