import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCreateProjectMutation, useTeamShowQuery } from "graphql_client";
import { gql } from "@urql/core";

gql`
  query TeamShow($id: ID!) {
    team(id: $id) {
      id
      createdAt
      updatedAt
      name
      memberships {
        id
        role
        status
        user {
          id
          profile {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export default function TeamShow() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };
  const [{ data }, getTeam] = useTeamShowQuery({
    requestPolicy: "cache-and-network",
    variables: { id: teamId },
    pause: !teamId,
  });
  const [createMeta, createProject] = useCreateProjectMutation();
  const [name, setName] = useState("");

  useEffect(() => {
    if (teamId) getTeam({ id: teamId });
  }, [teamId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await createProject({ teamId, name });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container flex">
      <div className="w-2/3">
        <h1>{data?.team?.name}</h1>
      </div>
      <form className="flex-1" onSubmit={handleSubmit}>
        <h2 className="text-sm mb-10">Create Project</h2>
        <p>
          <label>Project Name:</label>
          <input
            type="text"
            value={name}
            className="bg-gray-800 border border-gray-700 text-white"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </p>

        <button type="submit" disabled={createMeta.fetching}>
          Create Project
        </button>
      </form>
    </div>
  );
}
