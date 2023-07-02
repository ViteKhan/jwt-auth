import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Content from 'components/Content/Content';
import LoginForm from './components/LoginForm/LoginForm';
import { useStore } from './store/store-context';

const App: FC = () => {
  const { store } = useStore();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {store.isAuth ? <Content/> : <LoginForm/>}
    </div>
  );
}

export default observer(App);
