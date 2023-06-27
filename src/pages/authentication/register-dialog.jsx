import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimary, Heading3, TextInput } from '../../components';
import { register } from '../../utils';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts';

export const RegisterDialog = forwardRef(function LoginDialog({ close }, ref) {
  const { theme } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const [name, email, password] = event.target;
    try {
      const response = await register({ name: name.value, email: email.value, password: password.value });
      if (!response.error) {
        alert('Success create user');
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
        <Heading3>Register</Heading3>
        <form onSubmit={onSubmit}>
          <TextInput id="name" label="Name" type="text" placeholder="Enter your name" />
          <TextInput id="email" label="Email" type="email" placeholder="Enter your email" />
          <TextInput id="password" label="Password" type="password" placeholder="Enter your password" />
          <ButtonPrimary fullWidth>Register</ButtonPrimary>
        </form>
      </section>
    </dialog>
  );
});

RegisterDialog.propTypes = {
  close: PropTypes.func.isRequired
};
