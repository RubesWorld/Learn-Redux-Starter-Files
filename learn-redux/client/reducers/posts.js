//* a reducer takes in an action and a copy of current state

const posts = (state = [], action) => {
  console.log("post state", state, action);
  return state;
};

export default posts;
