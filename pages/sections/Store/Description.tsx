import styles from "./MagazineStore.module.scss";
import React from "react";


type  DescriptionType = {
    id?: number
    title?: string
    option?: string
}

const objects: DescriptionType[] = [
    {
        id: 1,
        title: "Оповестим вас о новом заказе",
        option: "Вы соберёте и упакуете товары. А после упаковки подтвердите отправку грузоперевозчику"
    },
    {
        id: 2,
        title: "Свяжемся с грузоперевозчиком",
        option: "Оповестим перевозчика об отправке вашего заказа, он подготовит ресурсы для отправки дальше"
    },
    {
        id: 3,
        title: "Заказ привязан к контейнеру",
        option: "После получения заказа, перевозчик закрепит его за контейнером и сообщит номер нам"
    },
    {
        id: 4,
        title: "Проследим за движением заказа",
        option: "Заказ в пути. Мы будем следить, чтобы ваши товары успешно прошли таможню"
    },
    {
        id: 5,
        title: "Заказ на складе и готов к продаже",
        option: "Проверим, чтобы товары соответствовали заказу и подготовим их для продажи нашим клиентам"
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
                            </div>

                        </div>
                    </div>
                }

            })}
        </div>
    )
}

export default Description