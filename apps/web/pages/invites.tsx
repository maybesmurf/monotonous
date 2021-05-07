import { gql } from "@apollo/client";
import {
  useAcceptInviteMutation,
  useDeleteInviteMutation,
  useInvitesQuery,
} from "graphql_client";

gql`
  query Invites {
    listInvites {
      id
      createdAt
      invitedBy {
        id
        profile {
          fullName
        }
      }
      project {
        id
        createdAt
        name
      }
      team {
        id
        createdAt
        name
      }
    }
  }
`;

export default function Invites() {
  const { data, loading } = useInvitesQuery();
  const [acceptInvite, acceptMeta] = useAcceptInviteMutation();
  const [deleteInvite, deleteMeta] = useDeleteInviteMutation();

  const disabled = acceptMeta.loading || deleteMeta.loading;

  if (!data && loading) {
    return <p>loading...</p>;
  }

  return (
    data?.listInvites && (
      <div className="container">
        <h1>List Invites</h1>
        {data.listInvites.length > 0 ? (
          <ul>
            {data.listInvites.map((invite) => {
              return (
                <li key={invite.id} className="mt-10">
                  <p className="uppercase text-sm opacity-50 font-bold">
                    {invite.project && "project"}
                    {invite.team && "team"}
                  </p>
                  <p>
                    <span className="text-sm uppercase mr-4">Invited by:</span>
                    {invite.invitedBy?.profile?.fullName}
                  </p>
                  {invite.team && (
                    <p>
                      <span className="text-sm uppercase mr-4">Team:</span>
                      {invite.team.name}
                    </p>
                  )}
                  {invite.project && (
                    <p>
                      <span className="text-sm uppercase mr-4">Project:</span>
                      {invite.project.name}
                    </p>
                  )}

                  <div className="flex space-x-10 mt-4">
                    <button
                      disabled={disabled}
                      className="text-green-200"
                      onClick={() =>
                        acceptInvite({ variables: { id: invite.id } })
                      }
                    >
                      Accept
                    </button>
                    <button
                      disabled={disabled}
                      className="text-red-200"
                      onClick={() =>
                        deleteInvite({ variables: { id: invite.id } })
                      }
                    >
                      Decline
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>no invites</p>
        )}
      </div>
    )
  );
}
