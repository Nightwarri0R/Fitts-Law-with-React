import React from 'react'
import {TextField, TextareaAutosize, Button,CardContent, Card} from "@material-ui/core";
import {useState} from "react";


const WelcomePage = ({onSubmitData}) => {
    const [deviceName, setDeviceName] = useState('')
    const [terms, setTerms] = useState(false)


    const onSubmit = (evt) => {
        evt.preventDefault()
        if (terms) {
            onSubmitData({deviceName})
        }
    }
    return <Card className="container-welcome_page">
        <h1>PoP the Bubbles!</h1>
        <form onSubmit={onSubmit}>
            <TextField className='device-name' id="device-id" required={true} label="Device Name" onInput={(evt) => {
                setDeviceName(evt.target.value)
            }}/>
            <br/>
            <br/>
            <TextareaAutosize rowsMin={30} rowsMax={30} disabled={true} className="user_manual">
                User Manual
                
                1. Enter your device name 
            </TextareaAutosize>
            <Button href="https://nightwarri0r.ddns.net/index.php/s/pn7tprqEYaBXEei" color="primary" variant="contained">Consent Form</Button>
            <br/>
            <input type="radio" required={true} id='terms' onChange={(evt) => {
                setTerms(evt.target.value)
            }}/>
            <label>Consent Form</label>
            <br/>
            <br/>
            <Button type={"submit"} variant="contained" color="primary"> Start</Button>
        </form>
    </Card>

}

export default WelcomePage;