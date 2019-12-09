import React from 'react'

const LoanResult = (props) => {
    return (
        <div>
            <table>
                <thead>
                  <tr>
                    <th>LOAN SUMMARY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly Payments: </td>
                    <td>{props.monthlyPayments}</td>
                  </tr>
                  <tr>
                    <td>Total Principal Paid: </td>
                    <td>{props.totalPrincipalPaid}</td>
                  </tr>
                  <tr>
                    <td>Total Interest Paid: </td>
                    <td>{props.totalInterestPaid}</td>
                  </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoanResult
