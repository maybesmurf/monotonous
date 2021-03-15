import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <main>
      <p>
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </p>
      <p>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </p>
    </main>
  );
}
