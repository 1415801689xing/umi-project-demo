import styles from './index.css';
import Link from 'umi/link';
import router from 'umi/router'

export default function () {
  const users = [
    {
      id: 1,
      name: 'xingxing',
    },
  ];
  return (
    // 页面跳转
    <div className={styles.normal}>
      <h1>Page Users list</h1>
      <ul>
        {/* {users.map (user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>

          </li>
        ))} */}
        {users.map (user => (
          <li key={user.id}
            onClick={()=>router.push(`/users/${user.id}`)}
          >
            {user.name}
            
          </li>
        ))}
      </ul>
    </div>
  );
}
