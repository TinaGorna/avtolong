import React from "react";
import {Divider} from "@material-ui/core";
import styles from "./Footer.module.scss"
import Link from "next/link";
import Image from "next/image";
import Dog from "../../../components/images/Dog.png";

export const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Divider/>

            <Link href="/">
                <Image src={Dog} className={styles.dog} alt={"Logo"}/>
            </Link>


            <span className={styles.title}>
                    Автолонг.ру
                </span>

            <div className={styles.contacts}>
                <span className={styles.phoneNumber}>
8 (800) 551-74-73
                </span>
                <span className={styles.link}>
info@autolong.ru
                </span>
            </div>

            <span className={styles.date}>
               @ 2022 Автолонг
            </span>

        </div>
    )
}