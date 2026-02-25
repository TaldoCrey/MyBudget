import styles from "./Panel.module.css"

function Panel() {
    return (
        <div className={styles.panel}>
            <p className="font-semibold text-[28px] text-center">Title</p>
            <hr className="border-[0.5px] border-bg-mid"></hr>
            <p className="text-left">Text</p>
        </div>
    );
}

export default Panel;