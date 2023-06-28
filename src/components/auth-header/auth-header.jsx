import FullLogo from '../../assets/images/logo-full.svg';
import styles from './styles.module.css';
import { Heading1 } from '../typography';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const AuthHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section data-theme={theme} className={styles.container}>
      <img src={FullLogo} />
      <Heading1 invert>Taskoo</Heading1>
    </section>
  );
};
