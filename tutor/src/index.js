import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// //Nest Components
// function Greeting() {
//   return (
//     <div>
//       <h1>hello people</h1>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }
// const Person=()=><h2>Apoorva</h2>
// const Message=()=>{
// return <h2>here</h2> }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// const BookList = () => {
//   return (
//     <section className="BookList">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };
// const Book = () => {
//   return (
//     <article className="Book">
//       <Image></Image>
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img src="./Images/Book-1.jpg" alt="Gopi Diaries: Coming Home " />
// );
// const Title = () => <h2>Gopi Diaries: Coming Home </h2>;
// const Author = () => {
//   return <h2>Sudha Moorthy</h2>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);

const firstbook = {
  image: "./Images/Book-1.jpg",
  title: "Gopi Diaries: Coming Home ",
  author: "Sudha Moorthy",
};

const secondbook = {
  image: "https://m.media-amazon.com/images/I/51t6lNaTw5L._SY445_SX342_.jpg",
  title: "The fowl twins ",
  author: "Eion colfer",
};
const BookList = () => {
  return (
    <section className="BookList">
      <Book>
        author={firstbook.author}
        title={firstbook.title}
        image={firstbook.image}
        {
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            quibusdam laudantium tenetur? Doloremque, voluptates delectus
            accusamus natus provident illum consequuntur. Adipisci eligendi sed
            tempora cum odit, quidem voluptatibus architecto possimus!
          </p>
        }
      </Book>
      <Book
        author={secondbook.author}
        title={secondbook.title}
        image={secondbook.image}
      />
    </section>
  );
};
// const Book = (props) => {
//   return (
//     <article className="Book">
//       <img src={props.image} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// destructuring in props
const Book = (props) => {
  // const Book = ({ image, title, author }) => { return ()
  const { image, title, author, children } = props;
  return (
    <article className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
