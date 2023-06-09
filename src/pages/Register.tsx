import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registrationSucessful } from "../services";
import GA4 from "react-ga4";

function RegisterPage() {
  const handleSubmit = () => {
    const regSucess = registrationSucessful();
    if (regSucess) {
      GA4.event({
        category: "Form",
        action: "Submit",
        label: "Registration Form",
        value: 1,
      });
      console.log("Registration successful");
    } else {
      GA4.event({
        category: "Form",
        action: "Submit",
        label: "Registration Form",
        value: 0,
      });
      console.log("Registration failed");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default RegisterPage;
