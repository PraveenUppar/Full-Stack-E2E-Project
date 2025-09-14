const getTodo = (req, res) => {
  res.send("Get Todo");
};
const createTodo = (req, res) => {
  res.send("Create Todo");
};
const editTodo = (req, res) => {
  res.send("Edit Todo");
};
const deleteTodo = (req, res) => {
  res.send("Delete Todo");
};

export { getTodo, createTodo, editTodo, deleteTodo };
