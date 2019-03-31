
import styles from './_layout.css';
// 嵌套路由
export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page _layout</h1>
      <div>{props.children}</div>
    </div>
  );
}
