import { observer } from 'mobx-react-lite';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import Auth from '../components/Auth/Auth';
import Layout from '../components/Layout';
import { Loader } from '../components/Loader/Loader';
import UserStore from '../stores/UserStore';
import '../styles/globals.css';

const AdminApp = observer(({ Component, pageProps }: AppProps) => {
  const init = async () => {
    if (process.env.STARLEDGER_AUTH_TOKEN) {
      const { id, email } = JSON.parse(
        atob(process.env.STARLEDGER_AUTH_TOKEN!.split('.')[1]),
      );

      UserStore.login({ id, email, token: process.env.STARLEDGER_AUTH_TOKEN });
    }
  };

  useEffect(() => {
    if (UserStore.hasInitialized && !UserStore.isLoggedIn) {
      window.location.href = `${process.env.STARLEDGER_APP_AUTH_URL}/login`;
    }
  }, [UserStore.hasInitialized, UserStore.isLoggedIn]);

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {UserStore.hasInitialized && UserStore.isLoggedIn ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loader color="white" />
      )}
      <Auth />
    </>
  );
});

export default AdminApp;
