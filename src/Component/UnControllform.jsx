import React, { useRef } from "react";
function UnControllform() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const securityQuestion = useRef();
  const bio =  useRef();
  const submitHandle = (e)=>{
    e.preventDefault();
    console.log(firstnameRef.current.value)
  }
  return (
    <>
      <form onChange={submitHandle}>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name="firstname" ref={firstnameRef} />
        <br />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" ref={lastnameRef} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} />

        <br />
        <select >
          <option>Select An Option</option>
          <option>What is your mother's maiden name</option>
          <option>“What was the name of your first pet</option>
          <option>What was the name of your first school</option>
        </select>
        
      </form>
    </>
  );
}

export default UnControllform;
