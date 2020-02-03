import React from "react";
import MonthComponent from "../../components/MonthComponent";
import WeekDaysComponent from "../../components/WeekDaysComponent";
import DayComponent from "../../components/DayComponent";
import moment from "moment";
import "./index.css";

export default class Month extends React.Component {
  state = {
    curM: {},
    nextM: {},
    prevM: {}
  };

  componentDidMount() {
    this.createState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createState(nextProps, true);
  }

  createState(props) {
    const curM =
      props.match.params.year && props.match.params.month
        ? `${props.match.params.year}-${props.match.params.month}`
        : moment().format("YYYY-MM");

    const nextM = moment(curM)
      .add(1, "M")
      .format("YYYY-MM");

    const prevM = moment(curM)
      .subtract(1, "M")
      .format("YYYY-MM");

    this.setState(
      {
        curM: {
          date: curM,
          name: moment(curM).format("MMMM YYYY"),
          days: moment(curM).daysInMonth(),
          editDay: null
        },
        nextM: {
          date: nextM,
          slug: nextM.replace("-", "/")
        },
        prevM: {
          date: prevM,
          slug: prevM.replace("-", "/")
        }
      }
    
    );
  }

  handleSetEditDay = day => {
    this.setState({
      curM: {
        ...this.state.curM,
        editDay: day
      }
    });
  };

  buildDays() {
    const days = [];
    const props = {
      editDay: this.state.curM.editDay,
      handleSetEditDay: this.handleSetEditDay
    };

    for (let i = 1; i <= this.state.curM.days; i++) {
      let date = `${this.state.curM.date}-${("0" + i).slice(-2)}`; 
      props["date"] = date;
      props["day"] = i;

      if (i === 1) {
        props["firstDayIndex"] = moment(date)
          .startOf("month")
          .format("d");
      } else {
        delete props["firstDayIndex"];
      }

      days.push(<DayComponent key={i} {...props} />);
    }

    return days;
  }

  render() {
    const weekdays = moment.weekdays();
    const days = this.buildDays();

    return (
      <div className="month">
        <MonthComponent
          curM={this.state.curM}
          nextM={this.state.nextM}
          prevM={this.state.prevM}
        />
        <WeekDaysComponent days={weekdays} />
        <section className="days">{days}</section>
      </div>
    );
  }
}
