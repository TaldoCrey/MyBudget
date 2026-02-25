import type { despesa } from '../../types/finances';
import styles from './Modal.module.css'

function Expense() {

    const gasto: despesa = {nome: "Gasto", autor: "teste", descricao: "Gasto de teste", freq:"Mensal", tipo:"assinatura", valor:1250};

    return(
        <div className={styles.expense}>
            <div className='flex w-full justify-end'>
                <button>
                    <img src="/close.svg" className='w-[30px] duration-100 acrive:opacity-90'></img>
                </button>
            </div>
            <div className="flex w-full h-fit items-center justify-center">
                <img src={`/${gasto.tipo}.svg`} className={styles.icone}></img>
            </div>
            <div className={styles.row}>
                <div className='w-[50%] h-full space-y-2'>
                    <div className={styles.row}>
                        <p className={styles.header}>Nome:</p>
                        <p className={styles.text}>{gasto.nome}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.header}>Autor:</p>
                        <p className={styles.text}>{gasto.autor}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.header}>Descrição:</p>
                        <p className={styles.text}>{gasto.descricao}</p>
                    </div>
                </div>
                <div className='w-[50%] h-full space-y-2'>
                    <div className={styles.row}>
                        <p className={styles.header}>Frequência:</p>
                        <p className={styles.text}>{gasto.freq}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.header}>Tipo:</p>
                        <p className={styles.text}>{gasto.tipo}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.header}>Valor:</p>
                        <p className={styles.text}>R${gasto.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className='w-full h-fit items-center justify-center space-x-10 flex mt-5'>
                    <button className={styles.confirmButton}>
                        <img className="w-[30px]" src="/pay.svg"></img>
                        Pagar
                    </button>
                    <button className={styles.editButton}>
                        <img className="w-[24px]" src="/edit.svg"></img>
                        Editar
                    </button>
                    <button className={styles.denyButton}>
                        <img className="w-[30px]" src="/delete.svg"></img>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Expense;