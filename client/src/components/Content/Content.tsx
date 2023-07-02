import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'store/store-context';
import { User } from '../../models';
import UserService from '../../services/UserService';

const Content: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { store } = useStore();

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>{`Hello ${store.user.email}`}</h1>
      <h1>{store.user.isActivated ? 'Email confirmed' : 'Confirm email'}</h1>
      <button onClick={getUsers}>Fetch users</button>
      <div>
        {users.map(user => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
      <button onClick={() => store.logout()}>Log out</button>
    </div>
  );
};

export default observer(Content);