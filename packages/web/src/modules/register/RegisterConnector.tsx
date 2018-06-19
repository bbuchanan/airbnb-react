import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// container is shared
// controller -> connector -> view

// view is going to house render for reactjs and react native.

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
