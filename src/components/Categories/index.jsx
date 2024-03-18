import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props) {
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
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
            </div>
    );
}