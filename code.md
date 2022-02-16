## Code before useReducer

```
function App() {
  const [bugs, setBugs] = React.useState(initialState);

  const handleSubmit = (bug) => {
    console.log(bug);
    bug.id = uuidv4();
    bug.resolved = false;

    setBugs([bug, ...bugs]);
  }

  const toggleResolved = (id) => {
    setBugs(
      bugs.map(bug => {
        if (bug?.id !== id) return bug;
        return { ...bug, resolved: !bug?.resolved };
      })
    );
  }

  return (
    <div className='App'>
      <NewBug onSubmit={handleSubmit} />
      <Bugs bugs={bugs} onResolved={toggleResolved} />
    </div>
  )
}
```

