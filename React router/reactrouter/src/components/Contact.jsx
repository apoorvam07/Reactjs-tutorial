import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <section>
        Contact
        <button onClick={() => goToHome()}> Home</button>
      </section>
    </>
  );
}
