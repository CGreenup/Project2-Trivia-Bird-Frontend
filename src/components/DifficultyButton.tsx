import React, {useState } from "react";
import { useEffect } from "react";

type Props = {
    difficulty:string;
    bootstrapColor?:string;
    onClick?: () => any;
    onChange?: () => any;
}

const DifficultyButton: React.FC<Props> = (props) => {
    const [difficultyText, setText] = useState<string>("");
    const [outlineColor, setColor] = useState<string>("");

    useEffect(() => {
            setText(props.difficulty);
            setColor(props.bootstrapColor || "primary");
        },
        [props.difficulty, props.bootstrapColor]
     );

    return (
        <div className = 'container'>
            <input type="radio" className="btn-check" name="options-outlined" id={difficultyText} 
            autoComplete="off" value={difficultyText.toLowerCase()} onClick={props.onClick} onChange={props.onChange}
            style= {{height: '100px'} }/>
            <label className={"btn btn-lg form-control btn-block btn-outline-" + outlineColor} htmlFor={difficultyText}> 
                <h1>{difficultyText}</h1>
            </label>
        </div>
    )
}


export default DifficultyButton