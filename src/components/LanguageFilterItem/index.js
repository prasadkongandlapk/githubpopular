import './index.css'

const LanguageFilterItem = props => {
  const {isActive, onClickLng, languageDetails} = props
  const {language, id} = languageDetails

  const onClickLanguage = () => {
    onClickLng(id)
  }
  const activeBtn = isActive ? 'identifyBtn' : 'btn'

  return (
    <div className="languages-bg">
      <button onClick={onClickLanguage} className={activeBtn} type="button">
        <p className="language">{language}</p>
      </button>
    </div>
  )
}

export default LanguageFilterItem
