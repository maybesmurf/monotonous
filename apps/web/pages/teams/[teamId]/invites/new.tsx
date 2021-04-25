import { useCreateInviteMutation } from "graphql_client";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Team_TeamId_Members_New() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };
  const [createInvite, { data, loading }] = useCreateInviteMutation();
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await createInvite({
        variables: { email, teamId },
      });
    } catch (e) {
      console.log(e);
    }
  }

  if (data) {
    return <p>yay. they need to accept that thing.</p>;
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="text-2xl mb-10">Send Invite</h1>

      <p>
        <label>Email</label>
        <input
          type="email"
          className="bg-gray-800 border border-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </p>

      <button disabled={loading}>Submit</button>
    </form>
  );
}
