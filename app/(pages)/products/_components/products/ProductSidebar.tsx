import styles from './ProductSidebar.module.scss';

interface SidebarProps {
  selectedTags: string[];
  onTagChange: (tag: string) => void;
  onReset: () => void;
}

export default function ProductSidebar({
  selectedTags,
  onTagChange,
  onReset,
}: SidebarProps) {
  const tags = ['big', 'cute', 'super duper'];

  return (
    <aside className={styles.sidebar}>
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
