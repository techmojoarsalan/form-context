import React, { useState, useEffect } from "react";
import Validation from "./Validation";

function Controlform() {
  const initialValue = {
    firstname: "",
    lastname: "",
    email: "",
    isSubmit: true,
    selectedOption: "",
    securityAns: "",
    bio: "",
    option: "select an option",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormValue({ ...formValue, [name]: value });
    setFormErrors(Validation(formValue));
  };
  useEffect(() => {
    if (formValue.firstname && formValue.lastname && formValue.email) {
      setFormValue({ isSubmit: false });
    }
  }, [formValue]);
  return (
    <>
      <div className="container">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={formValue.firstname}
            onChange={handleChange}
          />
          <p>{formErrors.firstname}</p>
          <br />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formValue.lastname}
            onChange={handleChange}
          />
          <p>{formErrors.lastname}</p>

          <br />
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <br />
          <label htmlFor="Security Question"> Security Question</label>
          <br />
          <select value={formValue.option} onChange={handleChange}>
            <option defaultValue="Select an Option">Select an option</option>
            <option value="What is your mother's maiden name">
              What is your mother's maiden name
            </option>
            <option value="What was the name of your first pet">
              What was the name of your first pet
            </option>
            <option value="What was the name of your first school">
              What was the name of your first school
            </option>
          </select>
          <br />

          <input
            type="text"
            placeholder="securityAns"
            name="securityAns"
            value={formValue.securityAns}
            onChange={handleChange}
            required
          />
          <p>{formErrors.securityAns}</p>
          <br />
          <label htmlFor="bio">Bio : </label>
          <br />
          <textarea
            name="bio"
            placeholder="enter bio"
            rows={8}
            value={formValue.bio}
            onChange={handleChange}
          ></textarea>
          <p>{formErrors.bio}</p>
          <br />
          <button disabled={formValue.isSubmit}>Submit</button>
          <button type="reset" onClick={() => setFormValue(initialValue)}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
}
export default Controlform;
