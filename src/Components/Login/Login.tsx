import React, { FC, FormEvent, useState } from "react";
import {
  Button,
  FormField,
  Input,
  LoginForm,
  InputLabel,
  LoginWrapper,
} from "./Login.styles";
import { instance } from "../../Services/api";
import { useAppContext } from "../../Services/app-context";

const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { setSlToken } = useAppContext();

  const submitFeedbackHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { data: authResponseData } = await instance.post("/register", {
      client_id: "ju16a6m81mhid5ue1z3v2g0uh",
      email,
      name,
    });
    if (authResponseData) {
      setSlToken(authResponseData.data.sl_token);
      localStorage.setItem("slToken", authResponseData.data.sl_token);
    }
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
