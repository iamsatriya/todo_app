import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import { PrimaryButton } from '../buttons';
import { Heading3 } from '../typography';

import styles from './styles.module.css';

export const AuthDialog = forwardRef(function AuthDialog({ formLabel, close, onSubmit, children }, ref) {
  const { theme } = useContext(ThemeContext);

  return (
    <dialog
      ref={ref}
      onClick={(event) => {
        if (event.target.tagName.toLowerCase() === 'dialog') {
          close();
        }
      }}
    >
      <section data-theme={theme} className={styles.auth_container}>
        <button onClick={close} />
        <Heading3>{formLabel}</Heading3>
        <form onSubmit={onSubmit}>
          {children}
          <PrimaryButton fullWidth>{formLabel}</PrimaryButton>
        </form>
      </section>
    </dialog>
  );
});

AuthDialog.propTypes = {
  formLabel: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
