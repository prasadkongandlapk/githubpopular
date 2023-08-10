import './index.css'

const RepositoryItem = props => {
  const {languageDetails} = props
  const {issuesCount, starsCount, forksCount, name, avatarUrl} = languageDetails
  return (
    <li className="repo-bg">
      <img className="jdfskla" src={avatarUrl} alt={name} />
      <h3 className="h1">{name}</h3>
      <div className="kfd">
        <img
          className="jdfsklaa"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{issuesCount}</p>
      </div>
      <div className="kfd">
        <img
          className="jdfsklaa"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div className="kfd">
        <img
          className="jdfsklaa"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{starsCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
