import Score from "./../components/Score"
export default function None(){
    const score = 3.49;
    return (
        <Score score={score.toFixed(2)}/>
    )
}