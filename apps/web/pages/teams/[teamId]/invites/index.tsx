import { gql, useQuery } from "@apollo/client";
import { TeamInvitesQuery, useDeleteInviteMutation } from "graphql_client";
import { useRouter } from "next/router";

const query = gql`
  query TeamInvites($teamId: ID) {
    listInvites(teamId: $teamId) {
      id
      createdAt
      email
    }
  }
`;

export default function Teams_TeamId_Invites() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };
  const { data, loading, refetch } = useQuery<TeamInvitesQuery>(query, {
    variables: { teamId },
    skip: !teamId,
  });
  const [deleteInvite] = useDeleteInviteMutation();

  async function handleDelete(id: string) {
    try {
      await deleteInvite({
        variables: { id },
      });
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  if (!data && loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="container flex">
      <div className="w-2/3">
        <h1 className="text-2xl font-bold">Invites</h1>

        {data?.listInvites && data.listInvites.length > 0 && (
          <ul>
            {data.listInvites.map((invite) => {
              return (
                <li key={invite.id} className="mb-5">
                  <div className="flex">
                    <p className="font-bold">{invite.email}</p>
                  </div>
                  <p className="text-xs">
                    Sent: {new Date(invite.createdAt).toLocaleString()}
                  </p>

                  <button onClick={() => handleDelete(invite.id)}>X</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex-1">asdf</div>
    </div>
  );
}
