import React from "react";
import {InputLabel, MenuItem, Paper} from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import styles from "./HeaderSection.module.scss"
import Dog from "../../../components/images/Dog.png"
import Link from "next/link";
import Image from "next/image";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export const HeaderSection: React.FC = () => {

    const [language, setLanguage] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    return (
        <Paper classes={{root: styles.root}} elevation={0}>

            <div className={styles.elements}>
                <Link href="/">
                    <Image src={Dog} className={styles.dog} alt={"Logo"}/>
                </Link>
            </div>

                 <span className={styles.title}>
                    Автолонг.ру
                </span>



            <div className={styles.info}>
                <FormControl sx={{m: 1, minWidth: 80}} size="small">
                    <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={language}
                        label="Language"
                        onChange={handleChange}
                        defaultValue={"RU"}
                    >
                        <MenuItem value="RU">
                        </MenuItem>
                        <MenuItem value={"RU"}>RU</MenuItem>
                        <MenuItem value={"EN"}>EN</MenuItem>
                        <MenuItem value={"中文"}>中文</MenuItem>
                    </Select>
                </FormControl>

                <div className={styles.phone}>
                    <div className={styles.number}>8 (800) 551-74-73</div>
                    <div className={styles.schedule}>По будням с 9:00 до 17:00</div>

                </div>
            </div>

        </Paper>
    )
}