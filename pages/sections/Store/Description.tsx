import styles from "./MagazineStore.module.scss";
import React, {ChangeEvent} from "react";


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

    const [chooseOption, setChosenOption] = React.useState("")

    const handleOption = (event: ChangeEvent<HTMLSelectElement>) => {
        setChosenOption(event.currentTarget.value)
        setChosenOption("")
    }

    //const setColor = !isChosen ? "#EB5E28" : "#144d5c"
    //const value = chosenOption ? "#EB5E28" : "#F5F9FA"


    console.log("chosenOption", chooseOption)

    return (
        <div className={styles.cards}>

            {objects.map(i => {
                return <div
                    key={i.id}
                   // onClick={() => setChosenOption(chooseOption)}
                    onChange={() => handleOption}

                >
                    <div className={styles.card}>
                        <div
                            className={styles.titleWrapper}

                        >
                            <div className={styles.firstTitle}>{i.title}</div>
                            <div className={styles.secondTitle}>{i.option}</div>
                        </div>

                    </div>
                </div>
            })}

        </div>


    )
}

export default Description