import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css"
import { type dropProperties } from "../../types/finances";

function Dropdown() {

    const [dropdown, setDropdown] = useState<dropProperties>({visible:false, x:0, y:0});
    const dropRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [currentOpt, setCurrentOpt] = useState("A");

    const handleCloseDropdown = () => {
        setDropdown(m => m = {...m, visible: false});
    }

    const handleContextDropdown = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!triggerRef.current) {
            return
        }
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdown({visible: true, x:rect.left - 170, y:rect.bottom + 5});
    }

    useEffect(() => {
        if (!dropdown.visible) {
            return;
        }

        //setDropStyle(styles.dropdownlock);

        const handleClickOutside = (e: MouseEvent) => {
            if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
                handleCloseDropdown();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            //setDropStyle(styles.dropdown);
        }

    }, [dropdown.visible])


    const handleOptionClick = (option: string) => {
        setCurrentOpt(option);
        handleCloseDropdown();
    }
    const options: string[] = ["A", "B", "C", "d", "e"]

    return(
        <>
            <div ref={triggerRef} className={styles.drop} onClick={handleContextDropdown}>
                <div className="w-[10px] h-full flex justify-center items-center rotate-180">
                    <img src="/dropsinal.svg"></img>
                </div>
                <div className="px-[10px] text-txt font-semibold">
                    {currentOpt}
                </div>
            </div>
            {dropdown.visible && (<div ref={dropRef} style={{position: 'fixed', top:`${dropdown.y}px`, left: `${dropdown.x}px`, zIndex:1000}}
                className={styles.options}>
                <ul>
                    {options.map((value) => (
                        <li className={styles.listopt} onClick={() => (handleOptionClick(value))}>
                            {value}
                        </li>
                    ))}
                </ul>
            </div>)}
        </>
        
    );
}

export default Dropdown;