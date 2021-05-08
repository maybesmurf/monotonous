import { useQuery, gql } from "@apollo/client";
import {
  MemberRoles,
  ProjectShowQuery,
  useAddUserToProjectMutation,
  useRemoveUserFromProjectMutation,
} from "graphql_client";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const query = gql`
  query ProjectShow($id: ID!) {
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
`;

export default function Projects_ProjectId() {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };
  const { data, loading, refetch } = useQuery<ProjectShowQuery>(query, {
    variables: { id: projectId },
    skip: !projectId,
  });
  const [addMember, addMeta] = useAddUserToProjectMutation();
  const [removeMember, removeMeta] = useRemoveUserFromProjectMutation();
  const [email, setEmail] = useState("");

  if (!data || loading) {
    <div>loading...</div>;
  }

  async function handleAddUser(e: FormEvent) {
    e.preventDefault();

    if (!data?.project.teamId) {
      return;
    }

    try {
      await addMember({
        variables: {
          projectId,
          email,
          teamId: data.project.teamId,
        },
      });

      refetch();
    } catch {
      return false;
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
                  <p>{member.user?.profile?.fullName}</p>
                  {data.project.currentMember?.role === MemberRoles.Admin && (
                    <button
                      onClick={() =>
                        removeMember({ variables: { id: member.id } })
                      }
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

        <form className="mt-20" onSubmit={handleAddUser}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onInput={(e) => setEmail(e.currentTarget.value)}
            className="bg-gray-800 text-white"
          />
          <button type="submit" disabled={addMeta.loading}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
