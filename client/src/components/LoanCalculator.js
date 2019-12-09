import React, { Component } from 'react'
import LoanResult from './LoanResult'

export class LoanCalculator extends Component {

    state = {
      //LOANCALCULATOR
      loanAmount: '',
      loanTermInYears: '',
      interestRatePerYear: '',
      //LOANRESULT
      monthlyPayments: 0,
      totalPrincipalPaid: 0,
      totalInterestPaid: 0,
      //SHOW RESULT
      showResult: false,
      //SHOW RESET
      showReset: false
    }

    onChangeHandlerOfLoanAmount = (e) => {
      const loanAmount = e.target.value
      this.setState({
        loanAmount: loanAmount,
      })
    }

    onChangeHandlerOfLoanTermInYears = (e) => {
      const loanTermInYears = e.target.value
      this.setState({
        loanTermInYears: loanTermInYears
      })
    }

    onChangeHandlerOfInterestRatePerYear = (e) => {
      const interestRatePerYear = e.target.value
      this.setState({
        interestRatePerYear: interestRatePerYear
      })
    }

    calculateHandler = () => {
      let monthlyPayments = this.state.loanAmount
      monthlyPayments /= this.state.loanTermInYears * 12
      const mPFixed = monthlyPayments.toFixed(2)

      let totalInterestPaid = this.state.loanAmount * this.state.interestRatePerYear
      totalInterestPaid /= 100
      totalInterestPaid *= this.state.loanTermInYears
      const iPFixed = totalInterestPaid.toFixed(2)

      // const willShowResult = this.state.showResult

      this.setState({
        monthlyPayments: mPFixed,
        totalPrincipalPaid: this.state.loanAmount,
        totalInterestPaid: iPFixed,
        showResult: true,
        showReset: true
      })
    }

    resetHandler = () => {
      this.setState({
      //LOANCALCULATOR
      loanAmount: '',
      loanTermInYears: '',
      interestRatePerYear: '',
      //LOANRESULT
      monthlyPayments: 0,
      totalPrincipalPaid: 0,
      totalInterestPaid: 0,
      //SHOW RESULT
      showResult: false,
      //SHOW RESET
      showReset: false  
      })
    }

    render() {
      
      const { showResult, showReset } = this.state

      //SHOW RESULT
      //SHOULD BE DEFINE IN RETURN STATEMENT
      let loanResult = null
      let resetButton = null
      
      if(showResult){
        loanResult = (
          <LoanResult 
          monthlyPayments={this.state.monthlyPayments}
          totalPrincipalPaid={this.state.totalPrincipalPaid}
          totalInterestPaid={this.state.totalInterestPaid}
          />
        )
      }

      if(showReset){
        resetButton = (
          <button onClick={this.resetHandler}>Reset</button>
        )
      }

        return (
            <div>
                <table>
                    <thead>
                      <tr>
                        <th colSpan='2'>LOAN CALCULATOR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Loan Amount: </td>
                        <td>
                          <input 
                          value={this.state.loanAmount} 
                          onChange={this.onChangeHandlerOfLoanAmount} 
                          placeholder='Total Amount'/>
                        </td>
                      </tr>
                      <tr>
                        <td>Loan Term in Years: </td>
                        <td>
                          <input 
                          value={this.state.loanTermInYears} 
                          onChange={this.onChangeHandlerOfLoanTermInYears} 
                          placeholder='Total Year' />
                        </td>
                      </tr>
                      <tr>
                        <td>Interest Rate per Year: </td>
                        <td>
                          <input size="18" 
                          value={this.state.interestRatePerYear} 
                          onChange={this.onChangeHandlerOfInterestRatePerYear}
                          placeholder='ex.4.08' />%
                        </td>
                      </tr>
                    </tbody>
                </table>
                    <br></br>
                    {loanResult}
                    <br></br>
                    {resetButton}
                    <button onClick={this.calculateHandler} >Calculate!</button>
            </div>
        )
    }
}

export default LoanCalculator
