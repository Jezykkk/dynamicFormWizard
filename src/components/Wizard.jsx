import React from "react";
import { observer } from "mobx-react"
@observer
class Wizard extends React.Component {
  nextStep(e) {
    e.preventDefault();
    this.props.appStore.step = this.props.appStore.step + 1 > this.props.appStore.numberOfSteps ? this.props.appStore.numberOfSteps : this.props.appStore.step + 1;
  }
  prevStep(e) {
    e.preventDefault();
    this.props.appStore.step = this.props.appStore.step - 1 < 0 ? 0 : this.props.appStore.step - 1;
  }
  render() {
    const { step, numberOfSteps, formSettings, configuration } = this.props.appStore;
    const renderElement = (el, id) => {
      switch (el.type) {
        case "input::text":
          return <div key={el.type + "_" + id} className="field">
            <label htmlFor={el.id}>{el.label}</label>
            <input placeholder={el.placeholder} type="text" id={el.id} name={el.name} value={el.value} onChange={(e) => el.value = e.target.value} />
          </div>;
        case "input::checkbox":
          return <div key={el.type + "_" + id} className="ui checkbox">
            <input type="checkbox" name={el.name} id={el.id} checked={el.checked} onChange={(e) => el.checked = e.target.checked} />
            <label htmlFor={el.id}>{el.label}</label>
          </div>;
        case "select":
          return <div key={el.type + "_" + id} className="field">
            <label htmlFor={el.id}>{el.label}</label>
            <select id={el.id} className="ui fluid dropdown" value={el.value} onChange={(e) => el.value = e.target.value}>
              {el.options.map((option, id) => <option key={el.name + "_" + id} value={option.value}>{option.name}</option>)}
            </select>
          </div>;
      }
      return <div key={"field_" + id}> {el.type}</div>
    };
    const currentPage = configuration[step] && configuration[step].map((el, id) => renderElement(el, id));
    return <div className="centered-form">
      <form className="ui form " action={formSettings.action} method={formSettings.method}>
        <h1>Dynamic form wizard</h1>
        {currentPage}
        <div>
          {step > 0 &&
            <button className="ui left labeled icon button" onClick={this.prevStep.bind(this)}>
              <i className="left arrow icon"></i>
              Prev
            </button>
          }
          {step < numberOfSteps - 1 &&
            <button className="ui right floated right labeled icon button" onClick={this.nextStep.bind(this)}>
              <i className="right arrow icon"></i>
              Next
        </button>
          }
          {step === numberOfSteps - 1 &&
            <button type="submit" className="ui positive right floated right labeled icon button">
              <i className="right arrow icon"></i>
              Finish
      </button>
          }
        </div>

      </form>
    </div>
  }
}
export default Wizard;
