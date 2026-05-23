import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch all toys on page load
  useEffect(() => {
    fetch("http://localhost:6001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add a new toy via form submission
  function handleAddToy(newToy) {
    fetch("http://localhost:6001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((savedToy) => setToys([...toys, savedToy]));
  }

  // Increase likes via PATCH
  function handleLike(id, currentLikes) {
    fetch(`http://localhost:6001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: currentLikes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) =>
        setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)))
      );
  }

  // Delete a toy via DELETE
  function handleDelete(id) {
    fetch(`http://localhost:6001/toys/${id}`, {
      method: "DELETE",
    }).then(() => setToys(toys.filter((toy) => toy.id !== id)));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;