import style from './Input.module.css'
import{FaSistrix} from 'react-icons/fa'



export default function Input(){
    return(
        <div className={style.input}>
            <input type='text'/>
            <FaSistrix className={style.icone}/>

        </div>
    )
}