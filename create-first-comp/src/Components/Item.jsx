const Item = (props) => {
  return (
    <li key={fruit} className="list-group-item">
      {props.fruit}
    </li>
  );
};
export default Item;
