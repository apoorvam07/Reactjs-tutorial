import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/Contact");
  };

  return (
    <>
      <section>
        <h1>About</h1>
        <button onClick={() => goToContact()}> Contact</button>
      </section>
    </>
  );
}
