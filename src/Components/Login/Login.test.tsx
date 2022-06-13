import { fireEvent, screen, waitFor } from "@testing-library/react";
import { instance } from "../../Services/api";
import { render } from "../../Services/test";
import Login, { getAuthResponseDate } from "./Login";

const mockResponse = {
  data: {
    client_id: "ju16a6m81mhid5ue1z3v2g0uh",
    email: "abc@abc.com",
    sl_token: "smslt_83decac87cd54_936c8e0038a1c2",
  },
  meta: { request_id: "I1ZWitGfkz_aZNWAk7HFSh3TdnHclOWb" },
};

test("Render Login screen", () => {
  render(<Login />);
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
});

test("onChange input value and email work", async () => {
  render(<Login />);
  const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
  fireEvent.change(nameInput, { target: { value: "abc" } });
  const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: "abc@abc.com" } });
  expect(nameInput.value).toBe("abc");
  expect(emailInput.value).toBe("abc@abc.com");
});
