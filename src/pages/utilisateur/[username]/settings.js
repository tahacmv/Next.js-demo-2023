import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'

export default function SettingsPage(){
    const router = useRouter();
    const {username} = router.query;

    return(
        <>
            <main className={`${styles.main}`}>
            <h1>{username} Settings</h1>
            </main>
        </>
    )
}