import styles from "./workrow.module.css"

interface WorkRowProps {
    workYear: number;
    workArray: Array<Array<string>>;
}

export default function WorkRow(props: WorkRowProps) {
    return (
    <div className={styles.WorkRow}>
        <p className={styles.WorkYear}>{props.workYear}</p>
        <ul className={styles.Experience}>
            {props.workArray.map((work) => (
                <li key={work[0]}>
                <p className={styles.WorkPlace}><strong>{work[0]}</strong> - {work[1]}</p>
                <p className={styles.WorkDesc}>{work[2]}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}