import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/fetchWeather'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  searchHandler = (event) => {
    this.setState({term: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()

    this.props.weather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.term}
            onChange={this.searchHandler}
          />
          <button type="submit">search</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { weather: city => dispatch(fetchWeather(city)) }
}

export default connect(null, mapDispatchToProps)(SearchBar)
