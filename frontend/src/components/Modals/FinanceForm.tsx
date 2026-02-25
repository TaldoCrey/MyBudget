import styles from "./Modal.module.css"
import Dropdown from "../Dropdown/Dropdown";

function FinanceForm() {

    const isGasto = true;

    return(

        <div className={styles.form}>
            <div className='flex w-full justify-end'>
                <button>
                    <img src="/close.svg" className='w-[30px] duration-100 acrive:opacity-90'></img>
                </button>
            </div>
            <div className="flex justify-center">
                <p className="font-bold text-txt text-[32px]">
                    Adicione seu {(isGasto) ? "gasto" : "ganho"}!
                </p>
            </div>
            <div className={styles.row}>
                <div className="w-[50%] h-full items-start align-top flex flex-col">
                    <p className="font-bold text-txt text-[20px]">Nome: </p>
                    <input className={styles.input}></input>
                    <p className="font-bold text-txt text-[20px]">Autor: </p>
                    <Dropdown />
                    <p className="font-bold text-txt text-[20px]">Descrição: </p>
                    <textarea className={styles.txtarea}></textarea>
                </div>
                <div className="w-[50%] h-full items-start align-top flex flex-col">
                    <p className="font-bold text-txt text-[20px]">Valor: </p>
                    <input className={styles.input}></input>
                    <p className="font-bold text-txt text-[20px]">Frequência: </p>
                    <Dropdown />
                    <p className="font-bold text-txt text-[20px]">Tipo: </p>
                    <Dropdown />

                    <button className={styles.send}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>

    );

}

export default FinanceForm;