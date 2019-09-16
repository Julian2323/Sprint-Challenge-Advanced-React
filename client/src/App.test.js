import React from 'react';
import App from './App';
import Player from './components/Player';
import Navbar from './components/Navbar';

test("renders without crashing", () => {
  render(<App />);
})

test("verify dark mode toggle is present", () => {
  const { getByTestId } = render(<Navbar />);

  getByTestId(/dark-toggle/i);
});

test("verify player component is present", () => {
  render(<Player />);
})

test("Verify player name is present", () => {
  const { getByTestId } = render(<Player />);
  
  getByTestId(/player-name/i);
})