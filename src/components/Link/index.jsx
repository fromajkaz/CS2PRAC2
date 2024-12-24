import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../Header/anim';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
    const closeMenu = () => {
      isActive(false);
    };
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link onClick={closeMenu} href={href}>{title}</Link>
      </motion.div>
    )
}