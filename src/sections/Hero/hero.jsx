import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Ananya Tiwary CV.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return ( 
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} src={heroImg} alt="Profile picture of Ananya Tiwary" />
        <img 
             className={styles.colorMode}
             src={themeIcon}
             alt="color mode icon"
             onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
            Ananya
            <br />
            Tiwary
        </h1>
        <h2>Software Developer</h2>
        <span>
            <a href="https://x.com/home" targets="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/ananyatiwari18" targets="_blank">
            <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/ananya-tiwary/" targets="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>
        Designing impactful software solutions with a fresh perspective and a passion for technology.
        </p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero;