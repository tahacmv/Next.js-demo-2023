import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';



function HomePage(){

    const router = useRouter()

    const {username} = router.query;

    return(
        <>
            <main className={`${styles.main}`}>
            <h1>
                <div>Bonjour {username}</div>
                <div><Link href={
              {
                pathname: "/utilisateur/[username]/settings",
                query: {
                  username: "user1"
                }
              }
            }>settings</Link></div>
                </h1>
            </main>
        </>
    )
}

export default HomePage;
