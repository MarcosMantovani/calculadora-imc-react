import { useState, useEffect } from "react";

import styles from './Form.module.css';

const Form = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [alturaZero, setAlturaZero] = useState(false);
    const [imcClassificacao, setImcClassificacao] = useState("");

    useEffect(() => {
        if (altura > 0) {
            setAlturaZero(false);
            setImc(peso / (altura * altura));
        } else {
            setAlturaZero(true);
            setImc(0);
        }
    }, [altura, peso]);

    useEffect(() => {
        switch (true) {
            case imc <= 18.5:
                setImcClassificacao("MAGREZA");
                break;
            case imc <= 24.9:
                setImcClassificacao("NORMAL");
                break;
            case imc <= 29.9:
                setImcClassificacao("SOBREPESO");
                break;
            case imc <= 39.9:
                setImcClassificacao("OBESIDADE");
                break;
            default:
                setImcClassificacao("OBESIDADE GRAVE");
                break;
        }
    }, [imc]);

    return (
        <form className={styles.form}>
        <div className={styles.formItem}>
            <label className={styles.formLabel}>Altura:</label>
            <input className={styles.formInput} type="number" onChange={evento => setAltura(evento.target.value)} />
        </div>
        <div className={styles.formItem}>
            <label className={styles.formLabel}>Peso:</label>
            <input className={styles.formInput} type="number" onChange={evento => setPeso(evento.target.value)} />
        </div>
        <div className={styles.formItem}>
            <label className={styles.formLabel}>IMC</label>
            {alturaZero ? (
                <p>Altura não pode ser igual a zero</p>
            ) : (
                <>
                    <p className={styles.formAnswer}>{imc.toFixed(1)}</p>
                <p className={styles.formImcClassificacao}>{imcClassificacao}</p>
                </>
            )}
        </div>
    </form>
    )
}

export default Form