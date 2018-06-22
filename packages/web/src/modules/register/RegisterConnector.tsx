import * as React from "react";
import { RegisterController } from "@abb/controller";
import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// container is shared
// controller -> connector -> view

// view is going to house render for reactjs and react native.

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
