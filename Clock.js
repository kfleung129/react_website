import React from 'react'

function PrintClock(props){
    const hourAngle = "rotate(" + ((props.date.getHours() * 10) + props.date.getMinutes() * 0.5).toString() + "deg)";
    const secondAngle = "rotate(" + (props.date.getSeconds() * 6).toString() + "deg)";
    console.log(hourAngle);
    return(
        <div style={{backgroundColor:"darkGrey", height:"500px", width:"500px", borderRadius:"50%", margin:"auto"}}>
            <div id="hour" style={{
                backgroundColor:"black",
                width:"5px",
                height:"150px",
                position:"relative",
                left:"250px",
                top:"100px",
                transform:hourAngle,
                transformOrigin:"bottom"
                }}>
            </div>
            <div id="second" style={{
                backgroundColor:"yellow",
                width:"3px",
                height:"200px",
                position:"relative",
                left:"250px",
                top:"-100px",
                transform: secondAngle,
                transformOrigin:"bottom"
                }}>
            </div>
        </div>
    );
}

class CircleClock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    componentDidMount(){
        this.clock = setInterval(()=>{
            this.tick();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clock);
    }
    render(){
        return(
            <PrintClock date={this.state.date}/>
        );
    }
}

export default CircleClock