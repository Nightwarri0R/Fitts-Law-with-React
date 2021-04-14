import '../App.css';

function Bubble(
    {
        xOffset,
        yOffset,
        onClickHandler,
        height,
        width
    }
) {

    return (
        <div className="bubble-container" style={{left: xOffset, top: yOffset, height: height, width: width}}>
            <div className="bubble" onClick={onClickHandler} style={{height: height, width: width}}/>
        </div>
    )
}

Bubble.defaultProps = {
    xOffset: 100,
    yOffset: 100,
    onClickHandler: () =>{}
}

export default Bubble;
