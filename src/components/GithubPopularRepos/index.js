import './index.css'
import {Component} from 'react'
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
  state = {activeId: languageFiltersData[0].id}

  onClickLng = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
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
        <ul className="languages-bg">
          {languageFiltersData.map(each => (
            <RepositoryItem
              languageDetails={each}
              key={each.id}
              activeId={activeId}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
