import { useContext } from 'react';
import { AuthHeader, PrimaryButton } from '../../components';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';
import { LoginDialog } from './login-dialog';
import { RegisterDialog } from './register-dialog';
import { useDialog } from '../../hooks';

export const AuthenticationPage = () => {
  const { theme } = useContext(ThemeContext);

  const { ref: loginRef, showDialog: showLogin, closeDialog: closeLogin } = useDialog();

  const { ref: registerRef, showDialog: showRegister, closeDialog: closeRegister } = useDialog();

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
            <PrimaryButton fullWidth onClick={showLogin}>
              Login
            </PrimaryButton>
            <p data-theme={theme} className={styles.separator_text}>
              OR
            </p>
            <PrimaryButton fullWidth onClick={showRegister}>
              Register
            </PrimaryButton>
          </section>
        </article>
      </article>
    </>
  );
};
