import type { despesa } from "../../types/finances";
import styles from "./InsertionTable.module.css"

type props = {
    gainTable: boolean
}

function InsertionTable({gainTable}: props) {

    const data: despesa[] = [
        {nome: "A", descricao:"Aaa", freq: "Pontual", valor: 1000.0, tipo: "ocasional", autor: "teste"},
        {nome: "B", descricao:"Bbb", freq: "Pontual", valor: 200.0, tipo: "essencial", autor: "teste"},
        {nome: "C", descricao:"Ccc", freq: "Pontual", valor: 150.0, tipo: "assinatura", autor:"familia"},
        {nome: "D", descricao:"Ddd", freq: "Pontual", valor: 350.0, tipo: "delivery", autor:"familia"},
        {nome: "C", descricao:"Ccc", freq: "Pontual", valor: 150.0, tipo: "assinatura", autor:"familia"},
    ]

    return(
        <div className={styles.table}>
            <ul>
            <li className={styles.itemrow}>
                <p className={styles.header}>Tipo</p>
                <p className={styles.header}>Nome</p>
                <p className={styles.header}>Descrição</p>
                <p className={styles.header}>Autor</p>
                <p className={styles.header}>Frequência</p>
                <p className={styles.header}>Valor</p>
            </li>
            {
                data.reverse().map((gasto: despesa) => (
                    <>
                    <hr className="border-bg-light"/>
                    <li className={styles.itemrow}>
                        <div className={styles.item}>
                            <img src={!gainTable ? `/${gasto.tipo}.svg` : `/cashin.svg`} className={styles.icons} alt={gasto.tipo}/>
                        </div>
                        <p className={styles.item}>{gasto.nome}</p>
                        <p className={styles.item}>{gasto.descricao}</p>
                        <p className={styles.item}>{gasto.autor}</p>
                        <p className={styles.item}>{gasto.freq}</p>
                        <p className={styles.item}>R${gasto.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </li>
                    </>
                ))
            }
            <li className="flex justify-center mt-5">
                <button className={styles.addButton}>
                   <img src="/add.svg" className={styles.addIcon}></img>
                </button> 
            </li>
            </ul>
        </div>
    );
}

export default InsertionTable;