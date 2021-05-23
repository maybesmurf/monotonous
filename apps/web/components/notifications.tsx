import { gql } from '@apollo/client';
import { useNotificationsQuery } from 'graphql_client';

export const Notifications = () => {
  const { data } = useNotificationsQuery();

  return (
    <div className="relative group">
      <p className="p-2 relative z-10">Notifications</p>

      {data?.notifications && data.notifications.length > 0 && (
        <ul className="absolute top-0 left-0 pt-8 hidden group-hover:flex bg-gray-700 w-60 rounded shadow">
          {data.notifications.map(notification => {
            return (
              <li key={notification.id}>
                {notification.subject.profile.fullName} has invited you to{' '}
                {notification.team?.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const query = gql`
  query Notifications {
    notifications {
      id
      subject {
        id
        profile {
          fullName
        }
      }
      team {
        id
        name
      }
      project {
        id
        name
      }
    }
  }
`;
