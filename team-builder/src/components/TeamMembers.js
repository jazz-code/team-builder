import React, { useState } from "react";
import TeamArray from "../data/TeamArray";

const TeamMembers = props => {
  const [team, setTeam] = useState({ ...props.team });
  //   console.log("team", team);
  const [editing, setEditing] = useState(false);
  const handleChange = event =>
    setTeam({ ...team, [event.target.name]: [event.target.value] });

  if (editing) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          props.update(team);
          setTeam({ ...team });
          setEditing(false);
        }}
        className="update-form"
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            onChange={handleChange}
            value={team.name}
            name="name"
          />
        </label>
        <label htmlFor="name">
          Email:
          <input
            type="text"
            onChange={handleChange}
            value={team.email}
            name="email"
          />
        </label>
        <label htmlFor="name">
          Role:
          <input
            type="text"
            onChange={handleChange}
            value={team.role}
            name="role"
          />
        </label>
        <button>Update</button>
      </form>
    );
  } else {
    return (
      <div className="member">
        <sup onClick={() => props.del(props.team)}>X</sup>

        <h3>Name: {props.team.name}</h3>
        <h3>Email: {props.team.email}</h3>
        <h3>Role: {props.team.role}</h3>

        <button onClick={() => setEditing(true)}>Edit Member</button>
      </div>
    );
  }
};

export default TeamMembers;
