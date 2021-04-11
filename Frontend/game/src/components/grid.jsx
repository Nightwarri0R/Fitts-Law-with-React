import React, {useEffect, useState} from 'react'
import '../App.css';
import Block from "./block";

function Grid(
    {
        xOffset,
        yOffset,
        height,
        width,
        blockWidth,
        blockHeight,
        onBlockPress
    }
) {
    const generateNextRandomCords = (maxCordSize, blockSize) => {
        return (Math.floor(Math.random() * (Math.ceil(maxCordSize / blockSize) - 1)) * blockSize)
    }

    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const onBlockPressHandler = () => {
        onBlockPress({
            cords: {
                x: (currentX / blockWidth) + 1,
                y: (currentY / blockHeight) + 1
            },
            cordsScreenPosition: {
                x: {start: currentX, end: currentX + blockWidth},
                y: {start: currentY, end: currentY + blockHeight}
            }
        })
        generateNextGrid()
    }
    const generateNextGrid = () => {
        setCurrentX(generateNextRandomCords(width, blockWidth, xOffset))
        setCurrentY(generateNextRandomCords(height, blockHeight, yOffset))
    }

    return (
        <div className="container-wrapper">
            <div className="container" style={
                {
                    height: height,
                    width: width,
                    top: yOffset,
                    left: xOffset,
                    backgroundSize: `${blockWidth}px ${blockHeight}px`,
                }
            }>
                <Block xOffset={currentX} yOffset={currentY} onClickHandler={onBlockPressHandler} height={blockHeight}
                       width={blockWidth}/>
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
