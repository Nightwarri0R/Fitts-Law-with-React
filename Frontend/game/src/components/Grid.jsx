import React, { useState,useEffect } from 'react'
import '../App.css';
import Bubble from "./Bubble";
/** */
function Grid(
    {
        xOffset,
        yOffset,
        height,
        width,
        blockWidth,
        blockHeight,
        onBubblePress
    }
) {
    const generateNextRandomCords = (maxCordSize, blockSize) => {
        return (Math.floor(Math.random() * (Math.ceil(maxCordSize / blockSize) - 1)) * blockSize)
    }

    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const onBubblePresssHandler = () => {
        onBubblePress({
            cords: {
                x: (currentX / blockWidth) + 1,
                y: (currentY / blockHeight) + 1
            },
            cordsScreenPosition: {
                x: { start: currentX, end: currentX + blockWidth },
                y: { start: currentY, end: currentY + blockHeight }
            }
        })
        generateNextGrid()
    }
    const generateNextGrid = () => {
        setCurrentX(generateNextRandomCords(width, blockWidth, xOffset))
        setCurrentY(generateNextRandomCords(height, blockHeight, yOffset))
    }

    return (
        <div className="grid-wrapper">
            <div className="grid" style={
                {
                    height: height,
                    width: width,
                    top: yOffset,
                    left: xOffset,
                    backgroundSize: `${blockWidth}px ${blockHeight}px`,
                }
            }>
                <Bubble xOffset={currentX} yOffset={currentY} onClickHandler={onBubblePresssHandler} height={blockHeight}
                    width={blockWidth} />
            </div>
        </div>
    );
}

Grid.defaultProps = {
    xOffset: 100,
    yOffset: 100,
    height: 400,
    width: 400,
    blockHeight: 50,
    blockWidth: 100,
    interval: 5000
}

export default Grid;
