import {observable, computed} from "mobx"
export class Store {
  @observable step = 0;
  @observable formSettings = {
    action: "/endpoint/",
    method: "POST"
  }
  @observable configuration = [
    [
      {
        type: "input::text",
        name: "input_login",
        id: "input_name",
        value: "",
        placeholder: "Login",
        label: "Login"
      }, {
        type: "input::text",
        name: "input_email",
        id: "input_email",
        value: "",
        placeholder: "Email",
        label: "Email"
      }, {
        type: "input::password",
        name: "input_password",
        id: "input_password",
        value: "",
        placeholder: "Password",
        label: "Password"
      }, {
        type: "input::password",
        name: "input_re_password",
        id: "input_re_password",
        value: "",
        placeholder: "Repeat password",
        label: "Repeat password"
      }
    ],
    [
      {
        type: "input::text",
        name: "input_first_name",
        id: "input_name",
        value: "",
        placeholder: "First mame",
        label: "First name"
      }, {
        type: "input::text",
        name: "input_last_name",
        id: "input_last_name",
        value: "",
        placeholder: "Last name",
        label: "Last name"
      }, {
        type: "input::text",
        name: "input_zipcode",
        id: "input_zipcode",
        value: "",
        placeholder: "Zipcode",
        label: "Zipcode"
      }, {
        type: "input::text",
        name: "input_city",
        id: "input_city",
        value: "",
        placeholder: "City",
        label: "City"
      }, {
        type: "input::text",
        name: "input_street",
        id: "input_street",
        value: "",
        placeholder: "Street",
        label: "Street"
      }, {
        type: "input::text",
        name: "input_street_number",
        id: "input_street_number",
        value: "",
        placeholder: "Street number",
        label: "Street number"
      }, {
        type: "input::text",
        name: "input_local_number",
        id: "input_local_number",
        value: "",
        placeholder: "Local number",
        label: "Local number"
      }
    ],
    [
      {
        type: "select",
        label: "Select",
        options: [
          {
            name: "option1",
            value: 1
          }, {
            name: "option2",
            value: 2
          }
        ],
        id: "input_name",
        value: 2
      }, {
        type: "select",
        options: [
          {
            name: "Tada"
          }
        ],
        id: "input_name",
        value: 1
      }
    ],
    [
      {
        type: "input::checkbox",
        name: "input_terms",
        id: "input_terms",
        checked: false,
        label: "Accept terms"
      }
    ]
  ];
  @observable tempConfig = [];
  @computed get numberOfSteps() {
    return this.configuration.length;
  };
}
const AppStore = new Store;
export default AppStore
window.AppStore = AppStore //Access store outside react component(For example call it in Rails View)