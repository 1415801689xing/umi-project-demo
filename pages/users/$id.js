
import styles from './$id.css';

// 动态路由
export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page user</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
}


