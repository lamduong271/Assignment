import { screen, waitFor } from "@testing-library/react";
import { mockAllPost, render } from "../../Services/testConfig";
import PostReader from "./PostReader";
import { instance } from "../../Services/api";

const mockResponse = {
  data: {
    data: {
      ...mockAllPost,
    },
  },
};

it("renders with loading", async () => {
  render(<PostReader />);
  expect(screen.getByText("Loading")).toBeInTheDocument();
});

it("renders with mock response", async () => {
  jest.spyOn(instance, "get").mockResolvedValueOnce(mockResponse);

  render(<PostReader />);
  await waitFor(() => {
    expect(
      screen.getByPlaceholderText("Enter a sender name")
    ).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("User 1")).toBeInTheDocument();
  });
});
