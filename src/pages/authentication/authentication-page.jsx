import { useContext, useRef } from 'react';
import { AuthHeader, ButtonPrimary } from '../../components';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';
// import { UseToggle } from '../../hooks';
import { LoginDialog } from './login-dialog';

export const AuthenticationPages = () => {
  const { theme } = useContext(ThemeContext);
  const loginRef = useRef();
  const showLogin = () => {
    loginRef.current.showModal();
  };
  const closeLogin = () => {
    loginRef.current.close();
  };

  // const { isOpen: isShowLogin, show: showLogin, hide: hideLogin } = UseToggle();

  return (
    <>
      <LoginDialog ref={loginRef} close={closeLogin} />
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
            <ButtonPrimary fullWidth>Register</ButtonPrimary>
          </section>
        </article>
      </article>
    </>
  );
};
