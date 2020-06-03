"use strict";
import React from "react";

import { FrappeGantt } from "./FrappeGantt";
import { Task } from "./Task";
import { ViewMode } from "./ViewMode";
import {data} from './data.json';

var tasks = data as Task[];


class App extends React.Component<any, any> {
  state = { mode: ViewMode.Month };

  changeDayView = () => {
    this.setState({ mode: ViewMode.Day });
  
  };

  changeHalfDayView = () => {
    this.setState({ mode: ViewMode.HalfDay });
  
  };

  changeWeekView = () => {
    this.setState({ mode: ViewMode.Week });
  
  };

  changeMonthView = () => {
    this.setState({ mode: ViewMode.Month });
  
  };
  

  

  render() {
    return (
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <div style={{ width: "25%", marginTop: '20px',}}>
        <p>Tasks</p>
          
          {data.map(item =>
            <p style={{paddingLeft:'10%', background:'#f5f5f5'}}>{item.name}</p>
            )}
            
          
        </div>
        <div style={{ width: "70%" }}>
          <div>
            <button onClick={this.changeMonthView}>
              Month
            </button>
            <button onClick={this.changeWeekView}>
              Week
            </button>
            <button onClick={this.changeHalfDayView}>
              HalfDay
            </button>
            <button onClick={this.changeDayView}>
              Day
            </button>
          </div>
          <div>
            <FrappeGantt
              tasks={tasks}
              viewMode={this.state.mode}
              onClick={task => console.log(task)}
              onDateChange={(task, start, end) => console.log(task, start, end)}
              onProgressChange={(task, progress) => console.log(task, progress)}
              onTasksChange={tasks => console.log(tasks)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
