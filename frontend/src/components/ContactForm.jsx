import { Form, Input } from "antd";
import Button from "../components/Button";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

const ContactForm = () => {
  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      labelAlign="inset" // Place label inside input box
      validateMessages={validateMessages}
      className="form-box"
    >
      <Form.Item
        name={"Name"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className="input-field" placeholder="Name" />
      </Form.Item>
      <Form.Item
        name={"Email"}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input className="input-field" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name={"Mobile"}
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[0-9]{10}$/),
            message: "Mobile number must be 10 digits!",
          },
        ]}
      >
        <Input className="input-field" type="tel" placeholder="Mobile Number" />
      </Form.Item>
      <Form.Item name={"Message"}>
        <Input.TextArea
          className="input-field"
          placeholder="Write a message..."
        />
      </Form.Item>
      <Form.Item>
        <Button
          title={"Say Hi.."}
          styleClass="buttonTwo primary-btn contact-btn"
        />
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
