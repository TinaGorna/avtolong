import React from "react";
import styles from "./ContactSection.module.scss"
import {Button, Divider, TextField, Typography} from "@material-ui/core";
import AvtolongContainer from "../../../components/images/AvtolongContainer.png"
import Image from "next/image";

export const ContactSection: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <div className={styles.leaveContact}>
                    <div className={styles.title}>
                        <div className={styles.header}>Начните работать с нами</div>
                        <div className={styles.secondText}>Заполните анкету, и наш специалист свяжется с вами в
                            ближайшее время
                        </div>
                    </div>

                    <div className={styles.input}>
                        <Typography variant="h6">
                            Шаг 1 из 2. Контактные данные
                        </Typography>
                        <Divider className="mt-50 mb-30"/>
                        <form>
                            <TextField
                                style={{
                                    marginBottom: 12
                                }}
                                size="small"
                                required
                                label="Имя"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                style={{
                                    marginBottom: 12
                                }}
                                size="small"
                                required
                                label="Электронная почта"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                style={{
                                    marginBottom: 12
                                }}
                                size="small"
                                required
                                label="Рабочий телефон"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                style={{
                                    marginBottom: 12
                                }}
                                size="small"
                                required
                                label="Аккаунт WeChat"
                                variant="outlined"
                                fullWidth
                            />

                            <Button className={styles.button} color="primary" variant="contained"
                                    fullWidth>Далее</Button>
                        </form>
                    </div>

                    <img src={AvtolongContainer.src} alt={"Container"} className={styles.imgContainer}/>
                </div>
            </div>
        </div>
    )
}