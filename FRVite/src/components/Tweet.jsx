export default function Tweet({ tweet }) {
    return (
        <div class={styles.tweetContainer}>
            <img src="https://github.com/ruinedprince.png" alt="Foto de perfil do usuário" />
            <div className={styles.user}>
                <span>Gabriel Maciel</span>
                <span>@ruinedprince</span>
                <span>Há 8 horas</span>
            </div>
            <div className={styles.tweetText}>
                {props.children}
            </div>
        </div>
    )
}