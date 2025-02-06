In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook inside a component that isn't directly within a route's component tree.  This results in `undefined` values being returned from `useParams`. For example:

```javascript
// Incorrect usage
function MyComponent() {
  const { id } = useParams(); // This will always be undefined
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
}

function User() {
  const {id} = useParams();
  return (
    <div>
        <MyComponent/>
    </div>
  );
}
```

`useParams` must be called within a component that is rendered as a direct child of a `<Route>` component that has the corresponding dynamic parameters in its `path` prop. 