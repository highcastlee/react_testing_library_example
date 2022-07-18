import Todo from './components/Todo/Todo';

const todo =[
  { id:1, content: '할일 1', completed:false },
  { id:2, content: '할일 2', completed:false },
  { id:3, content: '할일 3', completed:true },  
];
function App() {
  return (
    <div className="App">
      {/* <Fetch url="/greeting" /> */}
      <Todo todo={todo}/>
    </div>
  );
}

export default App;
