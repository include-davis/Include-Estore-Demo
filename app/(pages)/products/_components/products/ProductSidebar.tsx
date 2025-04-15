import styles from './ProductSidebar.module.scss';

interface SidebarProps {
  filter: string;
  onFilterChange: (tag: string) => void;
}

export default function ProductSidebar({
  filter,
  onFilterChange,
}: SidebarProps) {
  const tags = ['all', 'big', 'cute', 'super duper'];
  return (
    <main>
      <p>sidebar</p>
      <div className={styles.tagButtons}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onFilterChange(tag)}
            className={filter === tag ? styles.active : ''}
          >
            {tag}
          </button>
        ))}
      </div>
    </main>
  );
}
