import schema from '../schema.json';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
};

export default App;
