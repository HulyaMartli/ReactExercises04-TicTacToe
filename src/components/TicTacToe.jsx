import styles from "../assets/styles/TicTacToe.module.css"

export function TicTacToe(){
    return (
        <div className={styles.container}>
            <section>
            <button> </button>
            <button> </button>
            <button> </button>
            </section>
            
            <section>
            <button> </button>
            <button> </button>
            <button> </button>
            </section>

            <section>
            <button> </button>
            <button> </button>
            <button> </button>
            </section>
        </div>
    )
}