import Input from '../parts/Input'
import style from './Header.module.css'

function Header(){
    return(
        <div className={style.header}>
            <div className={style.img}></div>

            <Input/>

            <nav className={style.nav}>
                <p>Home</p>
                <p>Home</p>
                <p>Sobre nós</p>

            </nav>
        </div>
    )   
}

export default Header