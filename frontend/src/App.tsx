import NavBar from "./components/NavBar/NavBar.tsx"
import Body from "./Body.tsx"
import Login from "./components/Login/Login.tsx"
import Register from "./components/Register/Register.tsx";
import * as accountAPI from "./api/endpoints/account.ts";
import * as familyAPI from "./api/endpoints/family.ts"
import { 
    navBarContext, 
    type LoginContext, 
    loginContext,
    registerContext,
    type RegisterContext,
    type NavBarContext
 } from "./context.ts";
import { useEffect, useState } from "react";
import type { Account } from "./types/requests.ts";

function App() {

    //Control Variables -----------------------------------
    const [currentPage, setCurrentPage] = useState(0);
    const [loggedIn, setLogin] = useState(false);
    const [registered, setRegistration] = useState(true);
    const [familyExists, setFamilyExists] = useState(false);

    //Session variables -----------------------------------
    const [familyId, setFamilyId] = useState("");
    const [account, setAccount] = useState<Account>({id:"", balance: 0, budgets: [], email: "", family_name: "", familyId: "", username: ""});

    const NavBarContextValue: NavBarContext = {
        setPage: (page: number) => {
            setCurrentPage(page);
        },
        logout: () => {
            setLogin(false);
            setFamilyId("");
            setAccount({id:"", balance: 0, budgets: [], email: "", family_name: "", familyId: "", username: ""});
            setFamilyExists(false);
            localStorage.clear();
        },
        deleteAccount: async () => {
            const status = await accountAPI.deleteAccount(account.id);
            if (status == 200) {
                setLogin(false);
                setFamilyId("");
                setAccount({id:"", balance: 0, budgets: [], email: "", family_name: "", familyId: "", username: ""});
                setFamilyExists(false);
                localStorage.clear();
            }
        }
            

            
    }

    const LoginContextValue: LoginContext = {
        login: async (email: string, password: string) => {
            console.log(`email: ${email} | senha: ${password}`);
            const accountData = await accountAPI.login(email, password);
            console.log(JSON.stringify(accountData));
            const token = accountData.token;
            const account: Account = accountData.account;
            console.log(`logou?: ${account.id}`)
            if (account != null) {
                setLogin(true);
                localStorage.setItem("AccountToken", token);
                localStorage.setItem("AccountData", JSON.stringify(account))
                setAccount(account);
            }
        },
        register: (value:boolean) => setRegistration(value)
    }

    const RegisterContextValue: RegisterContext = {
        checkFamily: async (familyName:string) => {
            console.log(`family_name: ${familyName}`)
            if (familyName != "" && familyName != null) {
                const family_id: string = await familyAPI.checkFamily(familyName);
                if (family_id != null && family_id != "") {
                    console.log(`Resposta recebida! Id de família: ${family_id}`)
                    setFamilyExists(true);
                    setFamilyId(family_id)
                }
            }
        },

        register: async (name:string, email:string, password:string, family:string) => {
            console.log(`name: ${name} | email: ${email} | password: ${password} | family_name: ${family}`)
            const accountData = await accountAPI.createAccount(name, email, password, family);
            if (accountData != null) {
                console.log(`Resposta recebida ===> Id de conta: ${JSON.stringify(accountData)}`)
                setLogin(true);
                setRegistration(true);
                const newAccount: Account = {
                    id: accountData.account_id,
                    username: name,
                    email: email,
                    balance: 0,
                    budgets: [],
                    family_name: family,
                    familyId: familyId
                }
                setAccount(newAccount);
                localStorage.setItem("AccountData", JSON.stringify(newAccount));
                localStorage.setItem("AccountToken", accountData.token);
            }  
        },
        familyAvaiability: familyExists

    }

    useEffect(() => {
        console.log(`account => ${JSON.stringify(account)}`)
    }, [account])

    useEffect(() => {
        const checkLogin = () => {
            const userData = localStorage.getItem("AccountData");
            if (userData) {
                const acc: Account = JSON.parse(userData);
                setAccount(acc);
                setLogin(true);
            }
        }
        
        checkLogin();
    }, [])

    if (loggedIn) {
        return (
            <>  
                <navBarContext.Provider value={NavBarContextValue}>
                <NavBar account={account}/>
                </navBarContext.Provider>
                <Body currentPage={currentPage} account={account}/>
            </>
        );
    } else if (registered) {
        return (
            <>  
                <loginContext.Provider value={LoginContextValue}>
                <Login />
                </loginContext.Provider>
            </>
        );
    } else {
        return (
            <>
                <registerContext.Provider value={RegisterContextValue}>
                <Register />
                </registerContext.Provider>
                
            </>
        );
    }
    
}

export default App;