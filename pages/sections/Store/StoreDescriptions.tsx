import React, {ChangeEvent} from "react";
import {Paper} from "@material-ui/core";
import styles from "../InfoSection/InfoSectoin.module.scss";

const description = {
    options: [
        {
            title: "Оповестим вас о новом заказе",
            option: "Вы соберёте и упакуете товары. А после упаковки подтвердите отправку грузоперевозчику"
        },
        {
            title: "Оповестим вас о новом заказе",
            option: "Вы соберёте и упакуете товары. А после упаковки подтвердите отправку грузоперевозчику"
        },
        {
            title: "Заказ привязан к контейнеру",
            option: "После получения заказа, перевозчик закрепит его за контейнером и сообщит номер нам"
        },
        {
            title: "Проследим за движением заказа",
            option: "Заказ в пути. Мы будем следить, чтобы ваши товары успешно прошли таможню"
        },
        {
            title: "Заказ на складе и готов к продаже",
            option: "Проверим, чтобы товары соответствовали заказу и подготовим их для продажи нашим клиентам"
        }

    ]

}

export const StoreDescriptions: React.FC = () => {

    let variant
    for (let i = 0; i < description.options.length; i++) {
        variant = description.options[i]
    }

    const [chooseOption, setChosenOption] = React.useState("")

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setChosenOption(event.currentTarget.value)
    }

    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className={styles.options}>

            </div>
        </Paper>
    )
}