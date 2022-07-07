import ScoreCard from "./ScoreCard";

const ScoreList = (props) => {
  return (  
    <>
      {props.scores.map(score =>
        <ScoreCard key={score.date} score={score}/>  
      )}
    </>
  )
}
 
export default ScoreList;