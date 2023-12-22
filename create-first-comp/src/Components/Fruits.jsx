import Item from "./Components/Item";
const Fruits = () => {
  let fruits = ["apple", "banana", "mango", "orange"];

  return (
    <ul className="list-group">
      {fruits.map((fruit) => (
        <Item foodItem={fruit}></Item>
      ))}
    </ul>
  );
};
export default Fruits;
