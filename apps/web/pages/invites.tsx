import { gql } from "@apollo/client";
import { createECDH } from "crypto";
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
      team {
        id
        createdAt
        name
      }
    }
  }
`;

export default function Invites() {
  const { data, loading, refetch } = useInvitesQuery();
  const [acceptInvite, acceptMeta] = useAcceptInviteMutation();
  const [deleteInvite, deleteMeta] = useDeleteInviteMutation();

  const disabled = acceptMeta.loading || deleteMeta.loading;

  if (!data && loading) {
    return <p>loading...</p>;
  }

  async function handleAccept(id: string) {
    try {
      await acceptInvite({ variables: { id } });
      refetch();
    } catch (e) {
      console.error(e);
    }
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

                  <div className="flex space-x-10 mt-4">
                    <button
                      disabled={disabled}
                      className="text-green-200"
                      onClick={() => handleAccept(invite.id)}
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
