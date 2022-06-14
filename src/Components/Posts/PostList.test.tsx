import { fireEvent, screen } from "@testing-library/react";
import { AppContext } from "../../Services/app-context";
import { mockAllPost, render } from "../../Services/testConfig";
import PostList from "./PostList";

const mockAllPosts = {
  ...mockAllPost,
};

const contextValues = {
  slToken: "",
  setSlToken: jest.fn(),
  setCurrentSender: jest.fn(),
  currentSender: "User 2",
};

it("renders PostList input component", async () => {
  render(
    <AppContext.Provider value={{ ...contextValues }}>
      <PostList allPosts={mockAllPosts} />
    </AppContext.Provider>
  );
  expect(screen.getByPlaceholderText("Enter post content")).toBeInTheDocument();
  expect(screen.getByText("Post by: User 2")).toBeInTheDocument();
  expect(screen.getByText("message 2")).toBeInTheDocument();
  expect(screen.getByText("message 3")).toBeInTheDocument();
});

it("Filter post by search text", async () => {
  render(
    <AppContext.Provider value={{ ...contextValues }}>
      <PostList allPosts={mockAllPosts} />
    </AppContext.Provider>
  );
  const searchPost = screen.getByPlaceholderText(
    "Enter post content"
  ) as HTMLInputElement;
  fireEvent.change(searchPost, { target: { value: "abc" } });
  expect(screen.queryByText("Message 1")).not.toBeInTheDocument();
});
