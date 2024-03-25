import React from "react";
import styles from "./Orders.module.scss";
import { TiDelete } from "react-icons/ti";
import { useAppContext } from "./../../useAppContext";

export default function Orders({item}){
    const {deleteOrder} = useAppContext();
    return(
        <div className={styles.item}>
            <img src={"./images/"+item.img} alt="Error"/>
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <TiDelete onClick={()=>onDelete(item.id)} className={styles.deleteIcon}/>
        </div>
    );
}