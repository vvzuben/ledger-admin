import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import UserStore from '../../stores/UserStore';

import S from './Auth.module.scss';

const Auth: React.FC = observer(() => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMessage = (e: MessageEvent) => {
    if (e.data.type === 'login') {
      UserStore.login({
        id: e.data.id,
        email: e.data.email,
        token: e.data.token,
      });
    }
    if (e.data.type === 'logout') {
      UserStore.logout();
    }
  };

  useEffect(() => {
    if (iframeRef.current) {
      window.addEventListener('message', handleMessage);

      // iframeRef.current.contentWindow?.window.postMessage({});
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [iframeRef]);

  if (!process.env.STARLEDGER_APP_AUTH_URL) {
    return null;
  }

  return (
    <iframe
      className={S.container}
      ref={iframeRef}
      src={`${process.env.STARLEDGER_APP_AUTH_URL}/token`}
    ></iframe>
  );
});

export default Auth;
