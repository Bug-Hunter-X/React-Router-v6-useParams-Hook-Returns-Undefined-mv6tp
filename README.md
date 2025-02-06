# React Router v6 useParams Hook Returns Undefined

This repository demonstrates a common error when using the `useParams` hook in React Router v6.  The `useParams` hook only works within components rendered by a route that has a corresponding dynamic segment in its path.

## Problem

The `useParams` hook returns `undefined` values when called in a component not directly within a route's component tree.

## Solution

Ensure `useParams` is called within a component that's a direct child of a `<Route>` component with a matching dynamic segment in its `path` prop.
