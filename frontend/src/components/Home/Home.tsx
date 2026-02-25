import styles from "./Home.module.css"
import Panel from "../Panels/Panel.tsx"
import DGraphPanel from "../Panels/DGraphPanel.tsx";
import PGraphPanel from "../Panels/PGraphPanel.tsx";
import LGraphPanel from "../Panels/LGraphPanel.tsx";
import Table from "../Panels/Table.tsx";

function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className="w-[550px] h-[500px]"><DGraphPanel /></div>
                <div className="w-[800px] h-[500px]"><LGraphPanel /></div>
                <div className="w-[550px] h-[500px]"><PGraphPanel /></div>
                
                
                
            </div>
            <div className="flex justify-center space-x-[50px]">
                <Panel />
                <Panel />
                <Panel />
            </div>
            <div className="flex justify-center">
                <Table />
            </div>
            
        </div>
    );
}

export default Home;