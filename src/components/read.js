import { useEffect, useState } from 'react';

import Papa from 'papaparse';


export function Read() {
    const [dataCSV, setData] = useState([]);
    


    useEffect(() => {
        const getdataCSV = async () => {
            const res = await fetch("./filtered_tweets_cancelled.csv");
            const text = await res.text();
            const data = Papa.parse(text);

            console.log(data);
        }

        getdataCSV();
    }, [])

    return (
        <div>
            <h2>List of bus cancellations</h2>
            <ul>
                {dataCSV.map((row, index) => (
                    <li key={index}>
                    Content: {row.content}, Date: {row.date}
                    </li>
                ))}
            </ul>
        </div>
    );
    
    // <div>My name is Tahsin</div>
}