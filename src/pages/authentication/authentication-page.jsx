import { useContext } from 'react';
import { AuthHeader, ButtonPrimary } from '../../components';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';

export const AuthenticationPages = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={styles.desktop_container}>
      <article className={styles.welcome_container}>
        <p>Welcome</p>
      </article>
      <article className={styles.container}>
        <section>
          <AuthHeader />
        </section>
        <section>
          <ButtonPrimary fullWidth>Login</ButtonPrimary>
          <p data-theme={theme} className={styles.separator_text}>
            OR
          </p>
          <ButtonPrimary fullWidth>Register</ButtonPrimary>
        </section>
      </article>
    </article>
  );
};
