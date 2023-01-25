import "@testing-library/jest-dom/extend-expect";
import React from 'react';

global.React = React;
// @ts-ignore
window.ResizeObserver =
// @ts-ignore
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
