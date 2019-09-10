import React from "react";
import {observer} from "mobx-react"

@observer

class FormSource extends React.Component {
  checkIfJSONisValid(value) {
    try {
      JSON.parse(value);
    } catch (e) {
      return this.props.appStore.configuration;
    }
    return JSON.parse(value);
  }
  render() {
    return <textarea className="source-textarea" value={JSON.stringify(this.props.appStore.configuration)} onChange={(e) => {
        this.props.appStore.configuration = this.checkIfJSONisValid(e.target.value)
      }}></textarea>
  }
}
export default FormSource
