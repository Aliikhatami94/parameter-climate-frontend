import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchData} from "../../action";
import "./style.css"


function PayOutForm(props) {
    const dispatch = useDispatch();
    const future_price = useSelector(state => state.apiSlice.future_price);
    const payout_data = useSelector(state => state.apiSlice.payout_data);
    const api = useSelector(state => state.apiSlice);

    const [quarter, setQuarter] = useState("4");

    // Get the future price for the selected quarter if the future price object is not empty else wait for the object to be populated
    const selectedPrice = Object.keys(future_price).length > 0 ? future_price[`Q${quarter}`] : null;

    const handleSubmit = (event) => {
        event.preventDefault();

        // Get form data
        const data = new FormData(event.target);
        const trigger = data.get('trigger');
        const strike = data.get('strike');
        const start_year = data.get('start_year');


        // Do not submit if future price is just an empty object
        // Once available, the form will be submitted by fetchData action to the API endpoint payout
        if (Object.keys(future_price).length > 0) {
            const data = new FormData(event.target);
            const payload = {
                method: 'POST',
                path: 'payout',
                args: {
                    'current_price': selectedPrice,
                    'trigger': trigger,
                    'strike': strike,
                    'quarter': quarter,
                    'start_year': start_year,
                },
                target: 'payout_data',
                data: data
            }
            dispatch(fetchData(payload));
        } else {
            alert("Future price is not available yet. Please try again in a few seconds.")
        }

        console.log(future_price);
        console.log(selectedPrice)
    }

    // Fetch data from API when component mounts
    useEffect(() => {
        // Set a half an hour interval starting at the first render
        const interval = setInterval(() => {
            dispatch(fetchData({
                method: 'GET',
                path: 'future_price',
                target: 'future_price'
            }))
        }, 1800000);

        // Fetch data on first render
        dispatch(fetchData({
            method: 'GET',
            path: 'future_price',
            target: 'future_price'
        }))
        // Clear interval on unmount
        return () => clearInterval(interval);

    }, [dispatch]);

    return (
        <div className={"wrapper"} >
            <div>
                <label className={"fields"}>
                    <p>Current Future Price:</p>
                    <text>{selectedPrice ? selectedPrice : "Fetching..."}</text>
                </label>
            </div>
            <form onSubmit={handleSubmit} >
                <label className={"fields"} >
                    <p>Quarter:</p>
                    <div className="radio-group">
                        {[...Array(4).keys()].map((quarter) => {
                            return <label key={quarter} >
                                <input type="radio" name="quarter" value={quarter + 1} onChange={(event) => setQuarter(event.target.value)} defaultChecked={quarter === 3} />
                                {quarter + 1}
                            </label>
                        }
                        )}
                    </div>
                </label>
                <label className={"fields"} >
                    <p>Strike:</p>
                    <input type="text" name="strike" defaultValue={300} />
                </label>
                <label className={"fields"} >
                    <p>TMax Trigger:</p>
                    <input type="text" name="trigger" defaultValue={40} />
                </label>
                <label className={"fields"} >
                    <p>Start Year:</p>
                    <select name="start_year" defaultValue={2000}>
                        {[...Array(24).keys()].map((year) => { return <option key={year} value={year + 1999}>{year + 1999}</option> })}
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default PayOutForm;
