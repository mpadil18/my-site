import "./workrow.css"

interface WorkRowProps {
    workYear: number;
    workArray: Array<Array<string>>;
}

export default function WorkRow(props: WorkRowProps) {
    return (
    <div className="WorkRow">
        <p className="WorkYear">{props.workYear}</p>
        <ul className="Experience">
            {props.workArray.map((work) => (
                <li key={work[0]}>
                <p className="WorkPlace"><strong>{work[0]}</strong> - {work[1]}</p>
                <p className="WorkDesc">{work[2]}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}