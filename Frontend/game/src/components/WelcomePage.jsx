import React from 'react'
import {TextField, TextareaAutosize, Button, Card} from "@material-ui/core";
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
            <TextareaAutosize rowsMin={5} rowsMax={30} disabled={true} className="user_manual">
                User Manual:
                1.Enter your device name. 
                2.Read the consent form by clicking the consent 
                form button, which will display it in pdf format if you wish to download it you can do so by selecting the three dots on the right hand side to see the download option.
                3.You can start the experiment by selecting the radio button, meaning that you agree to the consent form then press start button.
                4.The experiment duration will be 1 minute.

                5.Starting at the top you will be presented with a grid inside the grid cells there will be targets that you need tap this will last 30 seconds.
                6.After the 30 seconds the grid will be automatically switched to appear at the bottom, that will last another 30 seconds.
                7.This will be the end of the experiment
            </TextareaAutosize>
            <Button href="https://nightwarri0r.ddns.net/index.php/s/GtzyyzpfnqtdCfn" color="primary" variant="contained">Consent Form</Button>
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