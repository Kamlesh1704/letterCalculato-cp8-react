// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}
  change = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="text">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className='para'>Enter the phrase</p>
          <div>
          <label htmlFor='inputt'>Enter the phrase</label>
          <input
          name="inputt"
          placeholder="Enter the phrase"
          id='inputt'
            type="text" 
            className="input"
            onChange={this.change}
          /> 
          </div>
          <div className="count">
            <p className="p">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}
export default LettersCalculator
