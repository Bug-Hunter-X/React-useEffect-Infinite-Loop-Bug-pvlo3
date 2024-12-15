# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The issue arises from incorrectly managing dependencies, leading to the component re-rendering endlessly.

## Bug Description
The `MyComponent` function uses the `useState` hook to manage a counter and `useEffect` to update the counter. However, the counter state is added to the dependency array which causes an infinite loop. 

## How to reproduce the bug
1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Observe the browser console for errors and the infinite loop which causes the page to crash.

## Solution
The solution involves removing the `count` from the dependency array in `useEffect`. In this specific case the counter updates with the button click, so no need for updating in useEffect hook