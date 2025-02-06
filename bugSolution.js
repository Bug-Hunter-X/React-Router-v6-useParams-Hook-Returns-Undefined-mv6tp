// Correct usage
function MyComponent({ id }) {
  // ... use the id prop here ...
}

function App() {
  return (
    <Routes>
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
}

function User() {
  const { id } = useParams();
  return (
    <div>
      <MyComponent id={id} />
    </div>
  );
}

//Alternative solution:

function MyComponent() {
    const navigate = useNavigate();
    const params = useParams();
    return (
        <div>
            {params.id}
        </div>
    );
}
function App(){
    return (
        <Routes>
            <Route path="/users/:id" element={<MyComponent/>}/>
        </Routes>
    );
}
//In this solution we still keep useParams in MyComponent, but this is not the ideal solution. It is better to pass it as a prop from parent component.