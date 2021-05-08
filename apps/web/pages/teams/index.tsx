import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  TeamIndexQuery,
  useCreateTeamMutation,
  useTeamIndexQuery,
} from "graphql_client";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query TeamIndex {
    listTeams {
      id
      createdAt
      updatedAt
      name
    }
  }
`;

export default function TeamIndex() {
  const router = useRouter();
  const { data, loading } = useTeamIndexQuery();
  const [createTeam, createMeta] = useCreateTeamMutation();
  const [name, setName] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name) return;

    try {
      const res = await createTeam({
        variables: { name },
      });

      if (res.data?.createTeam.id) {
        router.push(`/teams/${res.data.createTeam.id}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (!data && loading) {
    return <p>loading</p>;
  }

  return (
    <div className="container flex">
      <div className="w-2/3">
        <h1>Teams</h1>

        {data && data.listTeams.length > 0 && (
          <ul className="list-decimal">
            {data.listTeams.map((team) => {
              return (
                <li key={team.id}>
                  <Link href={`/teams/${team.id}`}>
                    <a>{team.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <form className="flex-1" onSubmit={handleSubmit}>
        <p>
          <label>Team Name:</label>
          <input
            type="text"
            value={name}
            className="bg-gray-800 border border-gray-700 text-white"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </p>

        <button type="submit" disabled={createMeta.loading}>
          Create Team
        </button>
      </form>
    </div>
  );
}
