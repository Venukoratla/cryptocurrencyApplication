// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = details
  return (
    <li>
      <div className="content-separate">
        <div>
          <img className="logo" src={currencyLogo} alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="space-around">
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
