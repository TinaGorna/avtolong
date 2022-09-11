import styles from "./MagazineStore.module.scss";
import React from "react";
import Wrapper from "../../../components/images/Wrapper.png"
import Track from "../../../components/images/Track.png"
import Check from "../../../components/images/Check.png"
import Boxes from "../../../components/images/Boxes.png"
import Last from "../../../components/images/Last.png"
import {StaticImageData} from "next/image";


type  DescriptionType = {
    id?: number
    title?: string
    option?: string
    image?: StaticImageData
}

const objects: DescriptionType[] = [
    {
        id: 1,
        title: "Оповестим вас о новом заказе",
        option: "Вы соберёте и упакуете товары. А после упаковки подтвердите отправку грузоперевозчику",
        image: Wrapper
    },
    {
        id: 2,
        title: "Свяжемся с грузоперевозчиком",
        option: "Оповестим перевозчика об отправке вашего заказа, он подготовит ресурсы для отправки дальше",
        image: Track
    },
    {
        id: 3,
        title: "Заказ привязан к контейнеру",
        option: "После получения заказа, перевозчик закрепит его за контейнером и сообщит номер нам",
        image: Boxes
    },
    {
        id: 4,
        title: "Проследим за движением заказа",
        option: "Заказ в пути. Мы будем следить, чтобы ваши товары успешно прошли таможню",
        image: Check
    },
    {
        id: 5,
        title: "Заказ на складе и готов к продаже",
        option: "Проверим, чтобы товары соответствовали заказу и подготовим их для продажи нашим клиентам",
        image: Last
    }
]

export function Description() {

    return (
        <div className={styles.cards}>
            {objects.map(i => {
                if (!(i.id === 5)) {
                    return <div key={i.id}>
                        <div className={styles.card}
                             style={{
                                 background: "#F5F9FA",
                             }}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.firstTitle}>{i.title}</div>
                                <div className={styles.secondTitle}>{i.option}</div>
                              <img src={i.image?.src} alt={"Item"} className={styles.image}/>
                            </div>

                        </div>
                    </div>
                } else {
                    return <div key={i.id}>
                        <div className={styles.card}
                             style={{
                                 background: "#EB5E28",
                                 color: "#FFFFFF"
                             }}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.firstTitle}>{i.title}</div>
                                <div className={styles.secondTitle} style={{color: "#FFFFFF"}}>{i.option}</div>
                                <img src={i.image?.src} alt={"Item"} className={styles.image}/>
                            </div>

                        </div>
                    </div>
                }

            })}
        </div>
    )
}

export default Description