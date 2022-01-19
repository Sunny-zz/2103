
import { Link } from 'react-router-dom';
import styles from '../App.module.css'
import TodoMVC from '../components/TodoMVC';
export default function Home() {
  return (
    <div>
      <h2 className={styles.title + ' title'}>Todo MVC</h2>
      <h3 className={styles.title_copy}>hello css module</h3>
      <Link to='/about' >去 about</Link>
      <TodoMVC />
    </div>
  )
}
