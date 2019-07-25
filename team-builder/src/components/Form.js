import React, { useState } from "react";
import teamArray from "../data/TeamArray";

function Form(props) {
  console.log(props);
  const [member, setMember] = useState({
    username: "",
    password: "",
    role: ""
  });

  function handleChange(event) {
    const updatedUser = { ...member, [event.target.name]: event.target.value };
    setMember(updatedUser);
  }
  return (
    // <form onSubmit={handleSubmit}>
    // teamArray.map((members, index) => {})
    <form
      onSubmit={event => {
        event.preventDefault(member);
        setMember({
          name: "",
          email: "",
          role: ""
        });
      }}
    >
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Username
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={member.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group" className="">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={member.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" className="">
          <label>Role</label>

          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter your role"
            onChange={handleChange}
            value={member.role}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
