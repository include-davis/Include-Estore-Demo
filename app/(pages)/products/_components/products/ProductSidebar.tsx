import styles from './ProductSidebar.module.scss';

interface SidebarProps {
  selectedTags: string[];
  onTagChange: (tag: string) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductSidebar({
  selectedTags,
  onTagChange,
  onReset,
  isOpen,
  onClose,
}: SidebarProps) {
  const tags = ['big', 'cute', 'super duper'];

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Close button only visible on phone */}
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>

      <button onClick={onReset} className={styles.allButton}>
        shop all
      </button>

      <div className={styles.tagButtons}>
        {tags.map((tag) => (
          <label key={tag} className={styles.filter}>
            <input
              className={styles.checkBox}
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => onTagChange(tag)}
            />
            {tag}
          </label>
        ))}
      </div>
    </aside>
  );
}
