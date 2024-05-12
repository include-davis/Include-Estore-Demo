import Link from 'next/link';
import styles from './Footer.module.scss';

interface NavLink {
  name: string;
  slug: string;
}

export default function Footer({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.description}>
          <h2>include estore</h2>
          <p>this estore demo was built for future clients to look at</p>
        </div>
        <div className={styles.navigation}>
          <div className={styles.learn_more}>
            <h2>look around</h2>
            <div className={styles.learn_more_links}>
              {navLinks.map((link) => {
                return (
                  <Link key={link.slug} href={link.slug}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className={styles.credit}>
        Designed & develped with 🤍 by #include at Davis @2024
      </p>
    </div>
  );
}
