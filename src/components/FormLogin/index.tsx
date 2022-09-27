import { FormEvent, useState } from "react";
import { Card, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";
// import { useDispatch } from "react-redux";
// import { getUser, setUser } from "../../store/modules/users";
// import { Dispatch } from "@reduxjs/toolkit";
import "./formLogin.scss";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("id", response.data.id);
      // dispatch(getUser());

      // navigate("/");
    } catch (error) {
      alert("Opa! Deu algo errado!");
    }
  };
  return (
    <div className="form-login h-100 pt-5 d-flex alight-itens-center justify-content-space-around">
      <h3>Login</h3>
      <p>Preencha seus dados e programe seu evento já!</p>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="button-login" variant="primary" type="submit">
          Fazer login
        </Button>
        <FormGroup className="cadastrarLink">
          <span>Não tem login?</span>
          <Link to={"/register"}> Cadastre-se</Link>
        </FormGroup>
      </Form>
    </div>
  );
}
