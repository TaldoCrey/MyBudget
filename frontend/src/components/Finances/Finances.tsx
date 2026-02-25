import FinanceForm from "../Modals/FinanceForm";
import LGraphPanel from "../Panels/LGraphPanel";
import Panel from "../Panels/Panel";
import InsertionTable from "../Table/InsertionTable";
import styles from "./Finances.module.css"

function Finances() {

    return(

        <div className={styles.container}>
            
            <div className="flex justify-center space-x-[60px]">
                <div className="flex flex-col justify-center items-center space-y-[20px]">
                    <img src="/loss.png" className="w-[100px]"></img>
                    <InsertionTable gainTable={false}/>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[20px]">
                    <img src="/gain.svg" className="w-[100px]"></img>
                    <InsertionTable gainTable={true}/>
                </div>
            </div>
            
            <div className="flex space-x-5">
                <Panel />
                <Panel />
                <div className="w-[500px] h-[350px]">
                    <LGraphPanel />
                </div>
                <Panel />
                <Panel />
            </div>
            
        </div>
    );
}

export default Finances;