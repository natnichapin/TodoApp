import BlockTodo from "../component/BlockTodo";

function DoneAlready(props) {
  return (
    <div className="w-4/5 h-4/5 bg-purple-200 grid grid-cols-3">
      <BlockTodo doneStatus={true}></BlockTodo>
    </div>
  );
}

export default DoneAlready;
