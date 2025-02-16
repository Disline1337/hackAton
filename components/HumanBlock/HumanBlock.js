import style from "./HumanBlock.module.css"
export default function HumanBlock({props}) {
    return (
        <div className={style.HumanBlock}>
            <div className={style.imageContainer}>
                <img
                    src={props.image}
                    alt={props.name}
                    className={style.image}
                />
            </div>

            <div className={style.content}>
                <h3 className={style.name}>{props.name}</h3>
                <p className={style.descript}>{props.descript}</p>
                <div className={style.bornDate}>
                     {props.born}
                </div>
            </div>
        </div>
    )
}


