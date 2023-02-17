import React from "react";
import {useSelector} from "react-redux";

import Overview from "./Overview";
import PayOutForm from "../PayOutForm/PayOutForm";
import BarChart from "../UiComponents/BarChart";
import DataTable from "../UiComponents/DataTable";
import "./style.css"


const Home = () => {
    const payout_data = useSelector(state => state.apiSlice.payout_data);

    // If payout_data is not empty and null map through it and create the data
    const data = Object.keys(payout_data).length > 0 ? {
        year: payout_data.year.map((year) => year),
        payout: payout_data.payout.map((payout) => payout)
    }
    : null;

    // If payout_data is empty or null return null else return the BarChart and DataTable
    if (!data) {
        return (
            <div className={"top-container"} >
                <h2>Welcome to Parameter Climate Payout Calculator</h2>
                <div className={"middle-container"} >
                    <div className={"left-panel"} >
                        <PayOutForm />
                    </div>
                    <div className={"right-panel"} >
                        <Overview />
                    </div>
                </div>
            </div>
        );
    } else {
        // Rerender BarChart and DataTable when payout_data is updated
        return (
            <div className={"top-container"} >
                <h1>Welcome to Parameter Climate Payout Calculator</h1>
                <div className={"middle-container"} >
                    <div className={"left-panel"} >
                        <PayOutForm />
                    </div>
                    <div className={"right-panel"} >
                        <Overview />
                        <br/>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}} >
                            <div style={{ width: 'fit-content' }} >
                                {payout_data && <BarChart xAxis={payout_data.year} yAxis={payout_data.payout} />}
                            </div>
                            <br/>
                            <div className={"data-table"} >
                                {payout_data && <DataTable data={data} width={"100%"} height={400} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
