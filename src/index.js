import React from "react";
import ReactDOM from "react-dom";
import {observer} from "mobx-react";
import Wizard from "./components/Wizard";
import FormSource from "./components/FormSource"
import Store from "./store/Store";
import {$mobx} from "mobx";

@observer
class App extends React.Component {
  render() {
    return (<div>
      <div className="ui modal"><FormSource appStore={Store}/></div>
      <div className="top-right">
        <button className="tiny ui icon button" onClick={() => {
            $('.ui.modal').modal('show');
          }}>
          <i className="cogs icon"></i>
        </button>
      </div>
      <Wizard appStore={Store}/>
    </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById("app"))