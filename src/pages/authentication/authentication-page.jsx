import { useContext, useRef } from 'react';
import { AuthHeader, ButtonPrimary } from '../../components';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';
import { LoginDialog } from './login-dialog';
import { RegisterDialog } from './register-dialog';

export const AuthenticationPages = () => {
  const { theme } = useContext(ThemeContext);
  const loginRef = useRef();
  const showLogin = () => {
    loginRef.current.showModal();
  };
  const closeLogin = () => {
    loginRef.current.close();
  };

  const registerRef = useRef();
  const showRegister = () => {
    registerRef.current.showModal();
  };
  const closeRegister = () => {
    registerRef.current.close();
  };

  return (
    <>
      <LoginDialog ref={loginRef} close={closeLogin} />
      <RegisterDialog ref={registerRef} close={closeRegister} />
      <article className={styles.desktop_container}>
        <article className={styles.welcome_container}>
          <p>Welcome</p>
        </article>
        <article className={styles.container}>
          <section>
            <AuthHeader />
          </section>
          <section>
            <ButtonPrimary fullWidth onClick={showLogin}>
              Login
            </ButtonPrimary>
            <p data-theme={theme} className={styles.separator_text}>
              OR
            </p>
            <ButtonPrimary fullWidth onClick={showRegister}>
              Register
            </ButtonPrimary>
          </section>
        </article>
      </article>
    </>
  );
};
