import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const query = gql`
  query ProjectShow($id: ID!) {
    project(id: $id) {
      id
      createdAt
      updatedAt
      name
      memberships {
        id
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
  const { data, loading } = useQuery(query, {
    variables: { id: projectId },
    skip: !projectId,
  });

  if (!data || loading) {
    <div>loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="text-2xl">{data?.project?.name}</h1>

      <div className="mt-10">
        <h2 className="text-lg">Project Members</h2>
        {data?.project?.memberships && data?.project?.memberships.length > 0 && (
          <ul>
            {data.project.memberships.map((member) => {
              console.log(member);
              return <li key={member.id}>{member.user?.profile?.fullName}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
