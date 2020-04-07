import * as React from "react";
import {useSelector} from "react-redux";
import { Chart } from "react-google-charts";

export const MapPage = () => {
    const data = useSelector(state => state.users);
    const [text, setText] = React.useState('');
    const totalUsers = data.reduce((acc, item) => {
        let num = parseInt(item[1]);
        if(isNaN(num)){ return acc;}
        return acc + num;
    }, 0 );

    function chartHandler({ chartWrapper }){
        if(!chartWrapper){ return; }

        const chart = chartWrapper.getChart();
        if (!chart){ return; }
        const selection = chart.getSelection();

        if (selection.length === 0){ return; }
        const region = data[selection[0].row + 1];
        setText(`${region[0]}: ${region[1]}`);
    };

    return (
        <div className="App" style={{width: '100%'}}>
            <h1>Users per country</h1>
            <p>Total Users: {totalUsers}</p>
            <p>{text}</p>
            <Chart
                chartEvents={[
                    {
                        eventName: "select",
                        callback: chartHandler
                    }
                ]}
                chartType="GeoChart"
                width="90%"
                data={data}
                mapsApiKey="AIzaSyA5wAqkxcAFPj-qfQgie2qOPPKhN0bP8BQ"
                style={{margin: 'auto'}}
            />
        </div>
    )
};
