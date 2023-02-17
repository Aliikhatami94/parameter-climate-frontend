import React from "react";


const Overview = () => {

        return (
            <div>
                <label>
                    <h3>Overview:</h3>
                    <text>
                        Welcome to our innovative application that helps you calculate the payout of your investments based on various inputs. Our user-friendly form allows you to enter strike price, specific quarter, starting year, and max temperature trigger to calculate the payout for each year.
                    </text>
                </label>
                <label>
                    <h3>Usage:</h3>
                    <text>
                        <ul>
                            <li>Select your strike price, specific quarter, starting year, and max temperature trigger from the dropdown menus.</li>
                            <li>Wait for the application to fetch future prices.</li>
                            <li>Once the future prices have been fetched, submit the form to receive the results.</li>
                            <li>Our application will calculate the payout for each year from the starting year till now, based on the inputs provided by you.</li>
                            <li>You can use this information to make informed decisions about your investments.</li>
                        </ul>
                    </text>
                </label>
            </div>
        );
};

export default Overview;
