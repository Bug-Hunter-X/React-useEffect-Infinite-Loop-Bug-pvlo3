```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect has no dependencies so it will only run once after the initial render
    // No need for count in dependency array 
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```