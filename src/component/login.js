import react from 'react'
import button from './component/login';

const login =() => {
    return (
        <div>
        <form action="">
            <input type ="text"/>
            <br/>
            <input type ="text"/>
        </form>
        <button name= {'Login'}/>
        <p>Please login with your username and Password</p>
        </div>
    )
}
export default login