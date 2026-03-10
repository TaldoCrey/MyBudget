//Deve renderizar o corpo de todas as páginas dinamicamente.
import Home from "./components/Home/Home.tsx"
import Finances from "./components/Finances/Finances.tsx"
import type { Account } from "./types/requests.ts";
import { useState } from "react";
import { bodyContext, type BodyContext } from "./context.ts";
//import Planner from "./components/Planner/Planner.tsx"


function Body(props: {currentPage:number, account: Account}) {

    const [account, setAccount] = useState<Account>(props.account);

    const BodyContextValue: BodyContext = {
        updateAccount: (acc: Account) => {
            setAccount(acc);
            localStorage.setItem("AccountData", JSON.stringify(acc));
        }
    }

    return(
        <>
            <bodyContext.Provider value={BodyContextValue}>
            {
                (props.currentPage == 0 ? <Home account={account}/> : <Finances account={account}/>)
            }
            </bodyContext.Provider>
        </>
    );
}

export default Body;