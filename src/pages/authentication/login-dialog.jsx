import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimary, Heading3, TextInput } from '../../components';
import { login, putAccessToken } from '../../utils';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';

export const LoginDialog = forwardRef(function LoginDialog({ close }, ref) {
  const { theme } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const [email, password] = event.target;
    try {
      const response = await login({ email: email.value, password: password.value });
      if (!response.error) {
        putAccessToken(response.data.accessToken);
        // TODO: Redirect to home
      }
    } catch (e) {
      console.log(e);
    } finally {
      close();
    }
  };
  return (
    <dialog
      ref={ref}
      onClick={(event) => {
        if (event.target.tagName.toLowerCase() === 'dialog') {
          close();
        }
      }}
    >
      <section data-theme={theme} className={styles.login_container}>
        <button onClick={close} />
        <Heading3>Login</Heading3>
        <form onSubmit={onSubmit}>
          <TextInput id="email" label="Email" type="email" placeholder="Enter your name" />
          <TextInput id="password" label="Password" type="password" placeholder="Enter your password" />
          <ButtonPrimary fullWidth>Login</ButtonPrimary>
        </form>
      </section>
    </dialog>
  );
});

LoginDialog.propTypes = {
  close: PropTypes.func.isRequired
};
