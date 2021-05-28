import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase';
import  '../style/login.css'
import { actionTypes } from './reducer';
import { useStateValue } from './stateProvider';

export default function Login() {

    const [ {}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then( (result) => 
            {
                dispatch ({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
        .catch( error => console.log(error) )
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/5/5c/20130624203616%21Chat_bubbles.svg" alt="" />
                <div className="login_text">
                    <h1 >Login to Chat App :-)</h1>
                </div>
                <Button type="submit"  onClick={signIn}
>
                        Sign In with Google
                </Button>
            </div>
        </div>
    )
}
