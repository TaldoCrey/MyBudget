import React, {useState} from 'react'
import styles from "./NavBar.module.css"

function NavBar() {

    return(
        <>
            <div className={styles.container}>
                <p className={styles.title}>MyBudget</p>
                <div className={styles.icons}>
                    <button>
                        <img src="/account.svg" className={styles.account}></img>
                    </button>
                    <button>
                        <img src="/family.svg" className={styles.family}></img>
                    </button>
                    <button>
                        <img src="/utilities.svg" className={styles.utils}></img>
                    </button>
                </div>
            </div>
        </>
        
    );
}

export default NavBar;