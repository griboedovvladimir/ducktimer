import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div className = "timers">
                <button className="delete">×</button>
                <h4>defult process</h4>
                <div className='timerpanel'>
                    <span> 00:00:00 </span> <p> Note: </p>
                    <button className="icon2"></button>
                    <button className="icon2"></button>
                    <button className="icon2"></button>
                </div>
                <div className="settimerpanel">Select process<select>
                    <option>film developer</option>
                    <option>developer</option>
                    <option>fix bath</option>
                    <option>stop bath</option>
                    <option>washing</option>
                    <option>drying</option>
                    <option>stabilised</option>
                    <option>exposure</option>
                </select>
                    <br/>Other process<input type="text" name="process" size={4} value=""/>
                    <div>
                        <input type="text" name="min" size={1} value="00"/>:
                        <input type="text" name="sec" size={1} value="00"/>:
                        <input type="text" name="ms" size={1} value="00"/></div>
                    <textarea className="timerinputs" placeholder="Note" id="notesinput' + this.name + '"/>
                    <div>
                        <button data-tooltip="Load film preset time" className="filmbutton"></button>
                    </div>
                </div>
                <button className="storkUp" id="stork' + this.name + '">▼</button>
            </div>
        )
    }
}

export default Timer;