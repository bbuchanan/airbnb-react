import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";
import { Form } from "antd";

export const Page3 = () => (
  <>
    <Form.Item label="Latitude">
      <Field name="latitude" placeholder="Latitude" component={InputField} />
    </Form.Item>
    <Form.Item label="Longitude">
      <Field name="longitude" placeholder="Longitude" component={InputField} />
    </Form.Item>
    <Form.Item label="Amenities">
      <Field name="amenities" placeholder="Amenities" component={InputField} />
    </Form.Item>
  </>
);
