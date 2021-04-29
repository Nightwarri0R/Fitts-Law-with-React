import '../App.css';
import react from 'react';
// Bubble variables
function Bubble(
    {
        xOffset,
        yOffset,
        onClickHandler,
        height,
        width
    }
) {
// Rendering the bubble component.
    return (
        <div className="bubble-container" style={{left: xOffset, top: yOffset, height: height, width: width}}>
            <div className="bubble" onClick={onClickHandler} style={{height: height, width: width}}/>
        </div>
    )
}
// Manually setting the position of the bubble with a callback 
Bubble.defaultProps = {
    xOffset: 100,
    yOffset: 100,
    onClickHandler: () =>{}
}


export default Bubble;
