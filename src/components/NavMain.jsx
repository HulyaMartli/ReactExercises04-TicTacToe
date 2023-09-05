import { iconGithub } from "./Icons"

export function NavMain() {
    return (
        <nav className="nav-main">
            <h1>TicTacToe</h1>
            <a href="https://github.com/HulyaMartli/ReactExercises05-TicTacToe" target="_blank" rel="noreferrer">
                {iconGithub}
            </a>
        </nav>
    );
}