import { useState } from "react";

export default function Contact() {
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const changeName = (e) => {
    setFormInput({ ...formInputs, name: e.target.value });
  };
  const changeEmail = (e) => {
    setFormInput({ ...formInputs, email: e.target.value });
  };
  const changeAge = (e) => {
    setFormInput({ ...formInputs, age: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formInputs);  
    setSubmittedData(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name </label>
      <input type="text" value={formInputs.name} onChange={changeName} />

      <label>Email </label>
      <input type="text" value={formInputs.email} onChange={changeEmail} />
      <label>Age </label>
      <input type="text" value={formInputs.age} onChange={changeAge} />

      <hr />
      <button type="submit">Submit</button>

      {submittedData && (
        <div>
          Name is {formInputs.name}, Email is {formInputs.email}, Age is {formInputs.age}
        </div>
      )}
    </form>
  );
}
