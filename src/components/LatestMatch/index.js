// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="competing-left-info-container">
        <p className="competing-team-title">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="info">{venue}</p>
        <p className="info">{result}</p>
      </div>
      <img
        src={`${competingTeamLogo}`}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="competing-right-info-container">
        <p className="match-details">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="match-details">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="match-details">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="match-details">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
