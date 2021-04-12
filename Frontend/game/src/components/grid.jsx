import React, {useEffect, useState} from 'react'
import '../App.css';
import Bubble from "./bubble";

function Grid(
    {
        xOffset,
        yOffset,
        height,
        width,
        bubbleWidth,
        bubbleHeight,
        onBubblePress
    }
) {
    const generateNextRandomBubble = (maxCordSize, bubbleSize) => {
        return (Math.floor(Math.random() * (Math.ceil(maxCordSize / bubbleSize) - 1)) * bubbleSize)
    }

    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const onBubblePressHandler = () => {
        onBubblePress({
            cords: {
                x: (currentX / bubbleWidth) + 1,
                y: (currentY / bubbleHeight) + 1
            },
            cordsScreenPosition: {
                x: {start: currentX, end: currentX + bubbleWidth},
                y: {start: currentY, end: currentY + bubbleHeight}
            }
        })
        generateNextGrid()
    }
    const generateNextGrid = () => {
        setCurrentX(generateNextRandomBubble(width, bubbleWidth, xOffset))
        setCurrentY(generateNextRandomBubble(height, bubbleHeight, yOffset))
    }

    return (
        <div className="container-wrapper">
            <div className="container" style={
                {
                    height: height,
                    width: width,
                    top: yOffset,
                    left: xOffset,
                    backgroundSize: `${bubbleWidth}px ${bubbleHeight}px`,
                }
            }>
                <Bubble xOffset={currentX} yOffset={currentY} onClickHandler={onBubblePressHandler} height={bubbleHeight}
                       width={bubbleWidth}/>
            </div>
        </div>
    );
}

Grid.defaultProps = {
    xOffset: 100,
    yOffset: 100,
    height: 400,
    width: 400,
    bubbleHeight: 50,
    bubbleWidth: 100,
    interval: 5000
}

export default Grid;
