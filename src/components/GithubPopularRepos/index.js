import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    newData: [],
    isUnDataAvlble: false,
    isLoading: true,
    activeId: languageFiltersData[0].id,
    error: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {activeId} = this.state
    const url = 'https://apis.ccbp.in/popular-repos'

    const options = {
      method: 'GET',
    }
    const response = await fetch(`${url}?language=${activeId}`, options)
    const data = await response.json()
    if (response.ok) {
      const popularRepos = data.popular_repos
      const formatedData = popularRepos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({newData: formatedData, isLoading: false})
    } else {
      const error = data.error_msg

      this.setState({isUnDataAvlble: true, error, isLoading: false})
    }
  }

  onClickLng = id => {
    this.setState({activeId: id})
  }

  renderRepos = () => {
    const {isUnDataAvlble, error, activeId, newData} = this.state
    return (
      <div>
        {isUnDataAvlble ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>{error}</h1>
          </div>
        ) : (
          <ul className="language-bg">
            {newData.map(each => (
              <RepositoryItem
                languageDetails={each}
                key={each.id}
                activeId={activeId}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const {activeId, isLoading, newData} = this.state
    return (
      <div className="bg">
        <h1>Popular</h1>
        <ul className="languages-bg">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              languageDetails={each}
              key={each.id}
              isActive={each.id === activeId}
              onClickLng={this.onClickLng}
            />
          ))}
        </ul>
        {isLoading ? (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        ) : (
          this.renderRepos()
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
