import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AuthDialog, TextInput } from '../../components';
import { register } from '../../utils';

export const RegisterDialog = forwardRef(function LoginDialog({ close }, ref) {
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
    <AuthDialog ref={ref} formLabel="Register" onSubmit={onSubmit} close={close}>
      <TextInput id="name" label="Name" type="text" placeholder="Enter your name" />
      <TextInput id="email" label="Email" type="email" placeholder="Enter your email" />
      <TextInput id="password" label="Password" type="password" placeholder="Enter your password" />
    </AuthDialog>
  );
});

RegisterDialog.propTypes = {
  close: PropTypes.func.isRequired
};
