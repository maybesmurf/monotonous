import React, { FormEvent, useState } from "react";
import { useSignupMutation } from "graphql_client";

export default function Signup() {
  const [{ data, fetching }, signup] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await signup({ email, firstName, lastName });
    } catch (e) {
      console.error(e);
    }
  }

  if (data) {
    return <p>Check your email for a confirmation.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-2xl space-y-5"
    >
      <p className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          className="bg-gray-800 text-white border border-gray-700"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          className="bg-gray-800 text-white border border-gray-700"
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          className="bg-gray-800 text-white border border-gray-700"
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </p>

      <button type="submit" disabled={fetching}>
        Submit
      </button>
    </form>
  );
}
