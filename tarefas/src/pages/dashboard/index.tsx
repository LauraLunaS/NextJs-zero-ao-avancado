import styles from "./style.module.css";
import Head from "next/head";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>
        

        <h1>Página Painel</h1>
        </div>
    )
}