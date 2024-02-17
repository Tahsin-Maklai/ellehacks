import { useEffect, useState } from 'react';
// import { usePapaParse } from 'react-papaparse';
import Papa from 'papaparse';
// eslint-disable-next-line import/no-webpack-loader-syntax
// import data from "!!raw-loader!../data.csv"

export function Read() {
    useEffect(() => {
        const getCsvData = async () => {
            const res = await fetch("./data.csv");
            const text = await res.text();
            const data = Papa.parse(text);

            console.log(data);
        }

        getCsvData();
    }, [])
    return <div>Hello!</div>
}