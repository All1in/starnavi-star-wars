import { HeroListElementType } from '../../types/types';
import styles from './HeroUnit.module.scss';

const HeroListElement: React.FC<HeroListElementType> = ({ name }) => {
  return (
    <li className={styles.hero}>
      <h3 className={styles.hero__name}>{name}</h3>
    </li>
  );
};

export default HeroListElement;
