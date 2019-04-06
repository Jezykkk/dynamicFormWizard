import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Wizard from "./components/Wizard";
import FormSource from "./components/FormSource"
import Store from "./store/Store";
import { $mobx } from "mobx";


@observer
class App extends React.Component {
  render() {
    return (<div>
      <div className="ui modal"><FormSource appStore={Store} /></div>
      <div className="top-right">
        <button className="tiny ui icon button" onClick={() => { $('.ui.modal').modal('show'); }}><i className="cogs icon"></i></button>
        <button className="tiny ui icon button" onClick={() => AppStore.configuration = [[{ "type": "input::text", "name": "input_first_name", "id": "input_name", "value": "", "placeholder": "Imię", "label": "Imię" }, { "type": "input::text", "name": "input_last_name", "id": "input_last_name", "value": "", "placeholder": "Nazwisko", "label": "Nazwisko" }, { "type": "input::text", "name": "input_email", "id": "input_email", "value": "", "placeholder": "E-mail", "label": "Email" }, { "type": "input::checkbox", "name": "input_terms", "id": "input_terms", "checked": false, "label": "Accept terms" }], [{ "type": "select", "options": [{ "name": "option1", "value": 1 }, { "name": "option2", "value": 2 }], "id": "input_name", "value": 2 }, { "type": "select", "options": [{ "name": "Tada" }], "id": "input_name", "value": 1 }], [{ "type": "input::text", "name": "input_zipcode", "id": "input_zipcode", "value": "", "placeholder": "Kod pocztowy", "label": "Kod pocztowy" }, { "type": "input::text", "name": "input_city", "id": "input_city", "value": "", "placeholder": "Miasto", "label": "Miasto" }, { "type": "input::text", "name": "input_street", "id": "input_street", "value": "", "placeholder": "Ulica", "label": "Ulica" }, { "type": "input::text", "name": "input_street_number", "id": "input_street_number", "value": "", "placeholder": "Numer domu", "label": "Numer domu" }, { "type": "input::text", "name": "input_local_number", "id": "input_local_number", "value": "", "placeholder": "Numer mieszkania", "label": "Numer mieszkanias" }], [{ "type": "input::text", "name": "Input Name", "id": "input_name", "value": 3 }]]}><i className="eraser icon"></i></button>
      </div>
      <Wizard appStore={Store} />
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById("app"))

