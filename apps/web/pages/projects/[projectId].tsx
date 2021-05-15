import { gql } from "@apollo/client";
import {
  MemberRoles,
  useAddMemberToProjectMutation,
  useProjectShowQuery,
  useRemoveUserFromProjectMutation,
  useSearchTeamMembersLazyQuery,
} from "graphql_client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDebounce } from "react-use";

const query = gql`
  query ProjectShow($id: String!) {
    project(id: $id) {
      id
      createdAt
      updatedAt
      name
      teamId
      currentMember {
        id
        role
      }
      memberships {
        id
        role
        membership {
          id
          role
          user {
            id
            profile {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;

export default function Projects_ProjectId() {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };
  const { data, loading, refetch } = useProjectShowQuery({
    variables: { id: projectId },
    skip: !projectId,
  });

  const [addMember, addMeta] = useAddMemberToProjectMutation();
  const [removeMember, removeMeta] = useRemoveUserFromProjectMutation();
  const [query, setQuery] = useState("");
  const [
    search,
    { data: results, refetch: clearSearch },
  ] = useSearchTeamMembersLazyQuery();

  const admin = data?.project.currentMember?.role === MemberRoles.Admin;
  const cursor =
    results && results?.listTeamMemberships.length
      ? results?.listTeamMemberships[results?.listTeamMemberships.length - 1].id
      : undefined;

  useDebounce(
    () => {
      if (query) {
        search({ variables: { query, cursor, take: 10 } });
      }
    },
    100,
    [query]
  );

  if (!data || loading) {
    <div>loading...</div>;
  }

  async function handleAddUser(id: string) {
    try {
      await addMember({
        variables: { projectId, id },
      });

      clearSearch?.({ query: "" });
      setQuery("");
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  async function handleRemoveMember(id: string) {
    try {
      await removeMember({ variables: { id } });
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container">
      <h1 className="text-2xl">{data?.project?.name}</h1>

      <div className="mt-10">
        <h2 className="text-lg">Project Members</h2>
        {data?.project?.memberships && data?.project?.memberships.length > 0 && (
          <ul className="space-y-5">
            {data.project.memberships.map((member) => {
              return (
                <li key={member.id} className="flex items-center">
                  <p>{member.membership?.user?.profile?.fullName}</p>
                  {admin && (
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      className="text-red-200"
                      disabled={removeMeta.loading}
                    >
                      Remove
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {admin && (
          <div className="mt-20">
            <label>Email:</label>
            <input
              type="text"
              value={query}
              onInput={(e) => setQuery(e.currentTarget.value)}
              className="bg-gray-800 text-white"
            />

            {results && results.listTeamMemberships.length > 0 && (
              <ul className="mt-10">
                {results.listTeamMemberships.map((member) => {
                  return (
                    <li key={member.id} className="flex">
                      <p>{member.user?.profile?.fullName}</p>
                      <button onClick={() => handleAddUser(member.id)}>
                        Add
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
