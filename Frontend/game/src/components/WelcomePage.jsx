import React from 'react'
import {TextField, TextareaAutosize, Button, Card, Container} from "@material-ui/core";


const WelcomePage = ({onSubmitData}) => {
    const [deviceName, setDeviceName] = useState('')
    const [terms, setTerms] = useState(false)


    const onSubmit = (evt) => {
        evt.preventDefault()
        if (terms) {
            onSubmitData({deviceName})
        }
    }
    return <Container className="container-landing">
        <h1>PoP the Bubbles!</h1>
        <form onSubmit={onSubmit}>
            <TextField className='device-name' id="device-id" required={true} label="Device Name" onInput={(e) => {
                setDeviceName(evt.target.value)
            }}/>
            <br/>
            <br/>
            <TextareaAutosize rowsMin={30} rowsMax={30} disabled={true} className="terms-condition">
                User Manual
            </TextareaAutosize>
            <Button href="" color="primary" variant="contained"></Button>
            <br/>
            <input type="radio" required={true} id='terms' onChange={(evt) => {
                setTerms(evt.target.value)
            }}/>
            <label>Terms of Service</label>
            <br/>
            <br/>
            <Button type={"submit"} variant="contained" color="primary"> Start</Button>
        </form>
    </Container>

}

export default WelcomePage;