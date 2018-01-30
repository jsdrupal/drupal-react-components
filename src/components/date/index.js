import React, { Component, Fragment } from 'react';

const DatePicker = class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: this.getDaysInMonth(this.props.month, this.props.year),
      calendarVisibility: false,
      month: this.props.month,
      year: this.props.year,
      pickedDate: '',
    };
  }
  getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDate();
    const firstDayOfTheWeek = new Date(year, month, 1).getDay();

    const lastDay = new Date(year, month + 1, 0).getDate();

    const days = [
      ...Array(firstDayOfTheWeek).fill(0),
      ...Array(lastDay - firstDay + 1)
        .fill()
        .map((_, idx) => firstDay + idx),
    ];

    const chunks = days
      .map((e, i) => i % 7 === 0 && days.slice(i, i + 7))
      .filter(Boolean);
    return chunks;
  };
  handleCalendarDatePick = (year, month, day) => {
    this.setState(prevState => ({
      ...prevState,
      calendarVisibility: false,
      pickedDate: new Date(year, month, day).toISOString(),
    }));
  };
  handleDateInput = () => {
    this.setState(prevState => ({
      ...prevState,
      calendarVisibility: !prevState.calendarVisibility,
    }));
  };
  render() {
    return (
      <Fragment>
        <input
          onClick={this.handleDateInput}
          value={this.state.pickedDate}
          tabIndex={0}
        />
        {this.state.calendarVisibility && (
          <table>
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              {this.state.calendar.map(weekSegments => (
                <tr>
                  {weekSegments.map(day => (
                    <td>
                      {day === 0 || (
                        <span
                          style={{ display: 'block', width: '100%' }}
                          onClick={() =>
                            this.handleCalendarDatePick(
                              this.state.year,
                              this.state.month,
                              day,
                            )
                          }
                          onKeyUp={() =>
                            this.handleCalendarDatePick(
                              this.state.year,
                              this.state.month,
                              day,
                            )
                          }
                          role="button"
                          tabIndex={0}
                        >
                          {day}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Fragment>
    );
  }
};

export default DatePicker;
