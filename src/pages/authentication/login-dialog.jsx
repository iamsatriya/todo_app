import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AuthDialog, TextInput } from '../../components';
import { login, putAccessToken } from '../../utils';

export const LoginDialog = forwardRef(function LoginDialog({ close }, ref) {
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
    <AuthDialog ref={ref} formLabel="Login" onSubmit={onSubmit} close={close}>
      <TextInput id="email" label="Email" type="email" placeholder="Enter your email" />
      <TextInput id="password" label="Password" type="password" placeholder="Enter your password" />
    </AuthDialog>
  );
});

LoginDialog.propTypes = {
  close: PropTypes.func.isRequired
};
