import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="container container-login">
        <div className="login-card">
          <div className="form-container">
            <Form>
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
              <Form.Label className="form-margins">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password"/>
              <Button variant="primary" type="submit" className="form-margins button-submit">
                Accedi
              </Button>
              <p>Non hai un account? <Link to={"#"} className="registration-link">Registrati</Link></p>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Login;