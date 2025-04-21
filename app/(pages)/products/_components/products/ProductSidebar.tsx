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
      <p>Filters</p>
      <button onClick={onReset}>All</button>

      <div className={styles.tagButtons}>
        {tags.map((tag) => (
          <label key={tag} className={styles.checkbox}>
            <input
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
