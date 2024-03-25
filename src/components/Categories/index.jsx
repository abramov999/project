import React, {useContext} from "react";
import styles from "./Categories.module.scss";
import {useAppContext} from "./../../useAppContext";

export default function Categories() {

    const {chooseCategory}=useAppContext();

    const categories = [
        {
            key: "all",
            name: "Все"
        },
        {
            key: "70s",
            name: "70s"
        },
        {
            key: "80s",
            name: "80s"
        },
        {
            key: "90s",
            name: "90s"
        },
        {
            key: "00s",
            name: "00s"
        },
    ];
    return (
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}
            </div>
    );
}