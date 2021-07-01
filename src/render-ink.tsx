import { render } from 'ink';
import { exit } from "process";
import React from 'react';
import { App } from './ui/App';

export const renderInk = async () => {
  const { waitUntilExit } = render(<App />);

  try {
    await waitUntilExit();
  } catch (error) {
    exit(1);
  }
}