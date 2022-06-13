import React, { FC, FormEvent, useState } from "react";
import {
  Button,
  FormField,
  Input,
  LoginForm,
  LoginWrapper,
} from "./Login.styles";
import { instance } from "../../Services/api";
import { useAppContext } from "../../Services/app-context";

interface AuthDataType {
  client_id: string;
  email: string;
  sl_token: string;
}
interface authResponseType {
  data: AuthDataType;
}

export const getAuthResponseDate = async (
  email: string,
  name: string
): Promise<authResponseType> => {
  const { data: authResponseData } = await instance.post("/register", {
    client_id: "ju16a6m81mhid5ue1z3v2g0uh",
    email,
    name,
  });
  return authResponseData;
};
const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { setSlToken } = useAppContext();

  const submitFeedbackHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const authResponseData = await getAuthResponseDate(email, name);
    if (authResponseData) {
      setSlToken(authResponseData.data.sl_token);
      localStorage.setItem("slToken", authResponseData.data.sl_token);
    }
  };

  return (
    <LoginWrapper>
      <LoginForm data-testid='form' onSubmit={submitFeedbackHandler}>
        <FormField>
          <label htmlFor='name'> Name </label>
          <Input
            name='abcdefgh'
            id='name'
            value={name}
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor='email'> Email </label>
          <Input
            name='Email'
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
