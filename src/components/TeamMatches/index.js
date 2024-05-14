// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const bgColors = [
  'bg-red',
  'bg-blue',
  'bg-yellow',
  'bg-violet',
  'bg-purple',
  'bg-pink',
  'bg-orange',
  'bg-green',
]

class TeamMatches extends Component {
  state = {teamMatchesList: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const randomNumb = Math.ceil(Math.random() * bgColors.length - 1)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatches: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {latestMatches, recentMatches} = formattedData

    const formattedLatestMatchDetails = {
      umpires: latestMatches.umpires,
      result: latestMatches.result,
      manOfTheMatch: latestMatches.man_of_the_match,
      id: latestMatches.id,
      date: latestMatches.date,
      venue: latestMatches.venue,
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      firstInnings: latestMatches.first_innings,
      secondInnings: latestMatches.second_innings,
      matchStatus: latestMatches.match_status,
    }

    const formattedRecentMatchDetails = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    const updatedData = {
      backgroundColor: bgColors[randomNumb],
      teamBannerUrl: formattedData.teamBannerUrl,
      latestMatches: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatchDetails,
    }
    // console.log(updatedData)

    this.setState({teamMatchesList: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchesList, isLoading} = this.state
    const {
      backgroundColor,
      teamBannerUrl,
      latestMatches,
      recentMatches,
    } = teamMatchesList

    return (
      <div className="team-details-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-details-page ${backgroundColor}`}>
            <img
              src={`${teamBannerUrl}`}
              alt="team banner"
              className="banner-img"
            />
            <p className="latest-matches-title">Latest Matches</p>
            <LatestMatch
              key={latestMatches.id}
              latestMatchDetails={latestMatches}
            />
            <ul className="recent-matches-container">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} recentMatchDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
