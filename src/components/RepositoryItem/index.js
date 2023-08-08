import './index.css'
import {Component} from 'react'

class RepositoryItem extends Component {
  state = {newData: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {activeId} = this.props
    const url = 'https://apis.ccbp.in/popular-repos'

    const options = {
      method: 'GET',
    }
    const response = await fetch(`${url}?language=${activeId}`, options)
    const data = await response.json()
    const popularRepos = data.popular_repos
    const formatedData = popularRepos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({newData: formatedData})
  }

  render() {
    const {newData} = this.state
    const {avatarUrl} = newData
    return (
      <div className="repo-bg">
        <img src={avatarUrl} alt="dsfkj" />
      </div>
    )
  }
}
export default RepositoryItem
