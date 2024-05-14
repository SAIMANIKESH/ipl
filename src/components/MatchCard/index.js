// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails

  const textColor = matchStatus === 'Won' ? 'text-green' : 'text-red'

  return (
    <li className="match-card-list-item">
      <div className="match-card-container">
        <img
          src={`${competingTeamLogo}`}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo-img"
        />
        <p className="date">{competingTeam}</p>
        <p className="info">{result}</p>
        <p className={`date ${textColor}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
