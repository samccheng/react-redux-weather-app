import React from 'react'
import { connect } from 'react-redux'
import Chart from './Chart'

class ForcastList extends React.Component {
  handleWeather(data) {
    if(data !== undefined) {
      const temps = data.list.map(weather => weather.main.temp)
      const humidity = data.list.map(weather => weather.main.humidity)
      const average = (array) => array.reduce((curr, next) => curr + next, 0) / array.length
      const avgT = ((average(temps) * 9/5)-459.67).toFixed(0)
      const avgH = average(humidity).toFixed(0)

      return (
          <tr key={data.city.name}>
            <td>{data.city.name}</td>
            <td><Chart data={temps} color="orange" avg={avgT}/></td>
            <td><Chart data={humidity} color="grey" avg={avgH}/></td>
          </tr>
      )
    }
      return (
        <div></div>
      )
  }

  render() {
    return (
      <div className="table">
        <table className="chart">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.handleWeather)}
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = ({weather}) => {
  return {weather}
}

export default connect(mapStateToProps)(ForcastList)
