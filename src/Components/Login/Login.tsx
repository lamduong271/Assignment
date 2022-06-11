import React, { FC, FormEvent, useState } from "react";
import {
  Button,
  FormField,
  Input,
  LoginForm,
  InputLabel,
  LoginWrapper,
} from "./Login.styles";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const submitFeedbackHandler = (e: FormEvent): void => {
    e.preventDefault();
    navigate("/posts");
  };
  return (
    <LoginWrapper>
      <LoginForm onSubmit={submitFeedbackHandler}>
        <FormField>
          <InputLabel> Name </InputLabel>
          <Input
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputLabel> Email </InputLabel>
          <Input
            id='email'
            value={email}
            type='email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormField>

        <Button>Login</Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
