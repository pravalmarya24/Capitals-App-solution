import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: 'India'}

  onSelectCapital = event => {
    countryAndCapitalsList.map(eachCounty => {
      if (eachCounty.id === event.target.value) {
        return this.setState({country: eachCounty.country})
      }
      return eachCounty
    })
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-capital-container">
        <div className="country-capital-card-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              id="capitalsId"
              className="select-element"
              onChange={this.onSelectCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label-ele" htmlFor="capitalsId">
              is capital of which country?
            </label>
          </div>
          <p className="country-name-para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
