import { useState, useRef, useEffect, useCallback } from 'react'
import '../App.css';
import Grid from "./Grid";
import Timer from "./timer";
import useWindowSize from "../hooks/WindowSize"
import WelcomePage from "./WelcomePage";
import EndPage from "./GameOver";
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
import {Card, CardContent} from '@material-ui/core';
import qs from 'qs'

const axios = require('axios').default;


function GameLogic() {
    const OPTIONS = {prefix: 'seconds elapsed!', delay: 0}
    const {width, height} = useWindowSize()
    const numberOfXSquares = 6
    const numberOfYSquares = 3
    const gameTime = 0.3 * 60 * 1000 // TOTAL GAME TIME. ON REACHING HALF OF THIS TIME THE GAME WILL FLIP. Time is in millisecond
    const flipTime = gameTime / 2 // TIME TO FLIP BOARD TO BOTTOM

    const gridLocationTop = {
        xOffset: 0,
        yOffset: 0,
        height: Math.floor(height / 3),
        width: width,
        blockWidth: Math.floor(width / numberOfXSquares),
        blockHeight: Math.floor((height / 3) / numberOfYSquares),
    }
    const gridLocationBottom = {
        ...gridLocationTop,
        xOffset: 0,
        yOffset: (height / 3) * 2,
        height: height / 3,
        width: width,
    }

    const [clickCounts, setClickCounts] = useState(0) // TOTAL CLICK COUNTS
    const [gridProps, setGridProps] = useState(gridLocationTop)
    const [isGridLocationTop, setIsGridLocationTop] = useState(true)
    const [userData, updateUserData] = useState({
        userInteractionData: {
            lowerGridClicks: [],
            upperGridClicks: [],
            upperGridClickCount: 0, // CLICKS REGISTERED ON UPPER LEVEL
            lowerGridClickCount: 0 // CLICKS REGISTERED ON LOWER LEVEL
        }, // USER INTERACTION DATA
        deviceName: '', // DEVICE NAME ENTERED BY USER
        gridTopSpecs: gridLocationTop, //SPECS OF UPPER GRID AS PER USER DEVICE
        gridBottomSpecs: gridLocationBottom, // SPECS OF THE BOTTOM GRID PRINTED AS PER USER SCREEN
    }) // Structure of the user data. UserInteractionData records the time in millisecond until the user clicks the bubble on screen
    const [gameState, setGameState] = useState(0)

    const timer = useRef(null)

    const onBubblePress = (data) => {
        setClickCounts((state) => state + 1)
        const timeDifference = timer.current.clickDifference()
        if (isGridLocationTop) {
            userData.userInteractionData.upperGridClicks.push({
                ...data,
                timeToClickInMilliSeconds: timeDifference,
                clickNumber: clickCounts + 1
            })
            userData.userInteractionData.upperGridClickCount += 1
        } else {
            userData.userInteractionData.lowerGridClicks.push({
                ...data,
                timeToClickInMilliSeconds: timeDifference,
                clickNumber: clickCounts + 1
            })
            userData.userInteractionData.lowerGridClickCount += 1
        }
        updateUserData(userData)
    }
    const onStartGame = ({deviceName}) => {
        userData.deviceName = deviceName
        updateUserData(userData)
        setGameState(1)

    }
    const onGameOver = () => {
        /**
         * Function to extract final data.
         * use variable userData
         */
        timer.current.pause()
        setGameState(2)
        console.log(userData)
        //TODO use the user data with
        console.log(clickCounts);
        console.log(userData.userInteractionData.lowerGridClicks.length);
        console.log(userData);
        console.log(userData.deviceName)
        
        //console.log(userData.userInteractionData.lowerGridClicks[0].cordsScreenPosition)
        
            
        // })
        axios({
            method: 'post',
            url:'http://localhost:3000',
            headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
            data: {
              data : qs.stringify(userData)
              
            }
          });
        //axios.post('http://localhost:3000/',userData)

    }

    const onGameReset = () => {
        timer.current.reset()
        timer.current.play()
        userData.userInteractionData = []
        updateUserData(userData => {
            userData.userInteractionData = []
            return userData
        })
    }
    const onClockUpdate = ({clock}) => {
        if (clock > flipTime) {
            setGridProps(gridLocationBottom)
            setIsGridLocationTop(false)
        }
        if (clock > gameTime) {
            onGameOver()
        }
    }

    return (
        gameState === 0 ? <WelcomePage onSubmitData={onStartGame} /> : gameState === 1 ?
            <div>
                <Grid  {...gridProps} onBubblePress={onBubblePress} />
                <Card style={{ top: "35%", position: "absolute", width: "100%", textAlign: "center" }}>
                    <CardContent>
                        <Timer
                            ref={timer}
                            onUpdate={onClockUpdate}
                            options={OPTIONS}
                        />
                        <h4>Click Count: {clickCounts}</h4>
                    </CardContent>
                </Card>
            </div> :
            <EndPage/>
    )
}

export default GameLogic;