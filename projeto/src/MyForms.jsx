import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormSelector({ onSelect }) {
  return (
    <div>
      <h2>Select a form:</h2>
      <button onClick={() => onSelect('basic')}>React Form</button>
      <button onClick={() => onSelect('name')}>Handling Form</button>
      <button onClick={() => onSelect('submit')}>Submitting Form</button>
      <button onClick={() => onSelect('multi')}>Multiple Input Fields</button>
      <button onClick={() => onSelect('textarea')}>Textarea</button>
      <button onClick={() => onSelect('select')}>Select</button>
      <button onClick={() => onSelect('multiChoice')}>Multiple Choices</button>
    </div>
  );
}

function ReactForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}

function HandlingForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

function SubmitAlertForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function MultiInputForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${inputs.username}, Age: ${inputs.age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function TextareaForm() {
  const [textarea, setTextarea] = useState("Content of the textarea.");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}

function SelectForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

function MultiChoiceForm() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter(option => option !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected options: ${selectedOptions.join(', ')}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select your favorite Blasphemous Areas:</h3>
      <label>
        <input
          type="checkbox"
          value="Mercy Dreams"
          checked={selectedOptions.includes("Mercy Dreams")}
          onChange={handleChange}
        />
        Mercy Dreams
      </label>
      <label>
        <input
          type="checkbox"
          value="Echoes of Salt"
          checked={selectedOptions.includes("Echoes of Salt")}
          onChange={handleChange}
        />
        Echoes of Salt
      </label>
      <label>
        <input
          type="checkbox"
          value="Ferrous Tree"
          checked={selectedOptions.includes("Ferrous Tree")}
          onChange={handleChange}
        />
        Ferrous Tree
      </label>
      <input type="submit" />
    </form>
  );
}

function MyForms() {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch (selectedForm) {
      case 'basic':
        return <ReactForm />;
      case 'name':
        return <HandlingForm />;
      case 'submit':
        return <SubmitAlertForm />;
      case 'multi':
        return <MultiInputForm />;
      case 'textarea':
        return <TextareaForm />;
      case 'select':
        return <SelectForm />;
      case 'multiChoice':
        return <MultiChoiceForm />;
      default:
        return <h2>Please select a form to display.</h2>;
    }
  };

  return (
    <div>
      <FormSelector onSelect={setSelectedForm} />
      {renderForm()}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForms />);

export default MyForms;
