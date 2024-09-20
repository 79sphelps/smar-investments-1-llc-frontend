import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom/client";
import { createMemoryHistory } from "history";
import { act } from "react";  // import { act } from "react-dom/test-utils";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Home } from "./pages/home";

let history;
let container;
let reactRoot;

export const renderWithRouter = (
  component,
  { location } = { location: "" }
) => {
  container = document.createElement("div");
  document.body.replaceChildren(container);
  reactRoot = ReactDOM.createRoot(container);

  history = createMemoryHistory({
    initialEntries: [location],
  });

  act(() =>
    reactRoot.render(
      <HistoryRouter history={history}>
        {component}
      </HistoryRouter>
    )
  );
};

test('renders learn react link', () => {
  // render(<App />);
  renderWithRouter(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(Home).toBeRendered();
});
