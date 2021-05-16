import React, {
  ChangeEvent,
  ComponentProps,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useSignupMutation } from "graphql_client";
import { useAuth } from "hooks/use_auth";

export default function Signup() {
  const router = useRouter();
  const loggedIn = useAuth((s) => s.loggedIn);
  const [signup, { data, loading }] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (loggedIn) router.replace("/");
  }, [loggedIn]);

  type InputProps = ComponentProps<"input"> & { label: string };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await signup({
        variables: { email, password, confirmation, firstName, lastName },
      });
    } catch (e) {
      console.error(e);
    }
  }

  if (data) {
    return <p>Check your email for a confirmation.</p>;
  }

  const inputs: InputProps[] = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.currentTarget.value),
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.currentTarget.value),
    },
    {
      label: "Confirm Password",
      name: "confirmation",
      type: "password",
      value: confirmation,
      onChange: (e) => setConfirmation(e.currentTarget.value),
    },
    {
      label: "First Name",
      name: "firstName",
      value: firstName,
      onChange: (e) => setFirstName(e.currentTarget.value),
    },
    {
      label: "Last Name",
      name: "lastName",
      value: lastName,
      onChange: (e) => setLastName(e.currentTarget.value),
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-2xl space-y-5"
    >
      {inputs.map(({ label, ...input }) => {
        return (
          <p className="flex flex-col">
            <label htmlFor="email">{label}</label>
            <input
              {...input}
              className="bg-gray-800 text-white border border-gray-700"
            />
          </p>
        );
      })}

      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
}
