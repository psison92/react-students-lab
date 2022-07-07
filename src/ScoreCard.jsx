import ScoreList from "./ScoreList";

const ScoreCard = ({score}) => {
  return (  
    <>
      <h4>Date: {score.date} | Score: {score.score}</h4>
    </>
  )
}
 
export default ScoreCard;