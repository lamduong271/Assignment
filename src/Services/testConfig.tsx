import { render, RenderResult } from "@testing-library/react";
import { ComponentType, ReactElement } from "react";
import { AppContextProvider } from "./app-context";

export type DefaultParams = Parameters<typeof render>;
export type RenderUI = DefaultParams[0];
type RenderOptionsWithChildren = {
  children: ReactElement;
};

export const getAllProviders = () => {
  const AllProviders = ({
    children,
  }: RenderOptionsWithChildren): ReactElement => {
    return <AppContextProvider>{children}</AppContextProvider>;
  };
  return AllProviders;
};

const customRender = (ui: RenderUI): RenderResult => {
  const AllProviders = getAllProviders();

  return render(ui, {
    wrapper: AllProviders as ComponentType,
  });
};

export const mockAllPost = {
  page: 1,
  posts: [
    {
      created_time: "2022-06-12T07:50:43+00:00",
      from_id: "user_1",
      from_name: "User 1",
      id: "1",
      message: "message 1",
      type: "status",
    },
    {
      created_time: "2022-08-12T07:50:43+00:00",
      from_id: "user_2",
      from_name: "User 2",
      id: "2",
      message: "message 2",
      type: "status",
    },
    {
      created_time: "2022-09-12T07:50:43+00:00",
      from_id: "user_3",
      from_name: "User 2",
      id: "3",
      message: "message 3",
      type: "status",
    },
  ],
};

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

export { customRender as render };
