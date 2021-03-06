import React, { Component } from "react";
import MonthYearPicker from "react-month-year-picker";

export default class ExpectedIncome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: 9,
      year: 2021,
      updatedValues: [],
      values: props.values,
    };
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="py-2 px-2">
        <div className="row">
          <div className="col-md-5 text-white">
            <MonthYearPicker
              selectedMonth={this.state.month}
              selectedYear={this.state.year}
              minYear={2019}
              maxYear={2021}
              onChangeYear={(year) => {
                this.setState({ year: year });
                this.props.filterIncomeTableByMonth(this.state.month, year);
              }}
              onChangeMonth={(month) => {
                this.setState({ month: month });
                this.props.filterIncomeTableByMonth(month, this.state.year);
              }}
            />
          </div>
          <div className="col-md-7">
          <p className="text-light text-center">Incomes per Workout Program in {this.state.year}-{this.state.month}</p>
            <table className="table table-striped small table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">program</th>
                  <th scope="col">Fee</th>
                  <th scope="col"></th>
                  <th scope="col">Count</th>
                  
                  <th scope="col">Income</th>
     
                </tr>
              </thead>
              <tbody>
                {this.props.values.map((program, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{program.pname}</td>
                    <td>{program.Fee}</td>
                    <td>×</td>
                    <td>{program.enrolledCount}</td>
                    
                    <td>{program.total_income}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
      </div>
    );
  }
}
