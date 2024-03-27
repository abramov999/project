import React, { useContext } from "react";
import styles from "./Categories.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
/*import { Interface } from "readline/promises";*/


interface Category {
    key: string;
    name: string;
}


const Categories: React.FC = () => {

    const { chooseCategory } = useAppContext();

    const categories: Category[] = [
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
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
};

export default Categories;