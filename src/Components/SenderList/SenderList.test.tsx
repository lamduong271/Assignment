import { fireEvent, screen } from "@testing-library/react";
import { AppContext } from "../../Services/app-context";
import { mockAllPost, render } from "../../Services/testConfig";
import SenderList from "./SenderList";

const mockAllPosts = {
  ...mockAllPost,
};

const contextValues = {
  slToken: "",
  setSlToken: jest.fn(),
  setCurrentSender: jest.fn(),
  currentSender: "User 2",
};

it("Filter Sender by search text", async () => {
  render(
    <AppContext.Provider value={{ ...contextValues }}>
      <SenderList allPosts={mockAllPosts} />
    </AppContext.Provider>
  );
  const searchText = screen.getByPlaceholderText(
    "Enter a sender name"
  ) as HTMLInputElement;
  fireEvent.change(searchText, { target: { value: "User 1" } });
  expect(screen.getByText("User 1")).toBeInTheDocument();
  expect(screen.queryByText("User 2")).not.toBeInTheDocument();
});
