import { useContext } from 'react';
import { AuthHeader, ButtonPrimary } from '../../components';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';
import { LoginDialog } from './login-dialog';
import { RegisterDialog } from './register-dialog';
import { UseDialog } from '../../hooks';

export const AuthenticationPages = () => {
  const { theme } = useContext(ThemeContext);

  const { ref: loginRef, showDialog: showLogin, closeDialog: closeLogin } = UseDialog();

  const { ref: registerRef, showDialog: showRegister, closeDialog: closeRegister } = UseDialog();

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
