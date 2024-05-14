// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-item">
        <img src={`${teamImageUrl}`} alt={`${name}`} className="teams-image" />
        <p className="team-name-title">{`${name}`}</p>
      </li>
    </Link>
  )
}

export default TeamCard
