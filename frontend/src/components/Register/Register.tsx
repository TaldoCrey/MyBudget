import { useState } from "react";
import styles from "./Register.module.css"

function Register() {

    const [PwdVisibility, setPwdVisibility] = useState("password");
    const [eye, setEye] = useState("closedeye");
    const [bgColor, setBgColor] = useState("light");

    const toggleVisibility = () => {
        if (PwdVisibility === "password") {
            setPwdVisibility("text");
            setEye("openeye");
            setBgColor("bg");
        } else {
            setPwdVisibility("password");
            setEye("closedeye")
            setBgColor("light");
        }
    }

    return(

        <div className="h-[100vh] flex justify-center items-center">
            <div className="flex bg-bg-mid w-[1200px] h-[700px] rounded-[12px] py-[2px]">
                <div className="flex-col flex justify-center items-center w-[50%]">
                    <div className="flex justify-center items-center">
                        <p className="font-bold text-txt text-[48px]">Register - MyBudget</p>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <input className={styles.input} placeholder="Email/Nome de Usuário"/>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <input className={styles.passInput} placeholder="Senha" type={PwdVisibility}/>
                        <button className={`w-[50px] bg-${bgColor} rounded-r-[12px] border-bg border-2 hover:border-bg-light`} onClick={toggleVisibility}>
                            <img src={`/${eye}.svg`}></img>
                        </button>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button className={styles.button}>Register</button>
                    </div>
                </div>   
                <div className="flex-col flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <p className="font-bold text-txt text-[40px]">Family Register - MyBudget</p>
                    </div>
                    
                    <div className="flex justify-center items-center mt-10">
                        <button className={styles.button}>Register</button>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default Register;