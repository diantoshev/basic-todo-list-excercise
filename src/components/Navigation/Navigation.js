import { NavLink } from 'react-router-dom';
import './Navigation.scss';
export default function Navigation() {

    return (
        <>
            <nav className='main-nav'>
                <ul>
                    <li><NavLink to="allTasks">All Tasks</NavLink></li>
                    <li><NavLink to="add-to-do">Add a new ToDo</NavLink></li>
                </ul>
            </nav>
        </>
    )
}