import { useEffect, useState } from 'react';

import Papa from 'papaparse';


export function Read() {
    const [dataCSV, setData] = useState([]);
    


    useEffect(() => {
        const getdataCSV = async () => {
            const res = await fetch("./data.csv");
            const text = await res.text();
            const data = Papa.parse(text);

            console.log(data);
        }

        getdataCSV();
    }, [])

    // return (
    //     <div>
    //       <input type="file"/>
    //       <table>
    //         <thead>
    //           <tr>
    //             {header.map((field, index) => (
    //               <th key={index}>{field}</th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {dataCSV.map((row, rowIndex) => (
    //             <tr key={rowIndex}>
    //               {header.map((field, index) => (
    //                 <td key={index}>{row[field]}</td>
    //               ))}
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   );
    return (
        <div>
            <h2>List of bus cancellation</h2>
            <ul>
                {dataCSV.map((row, index) => (
                    <li key={index}>
                    Content: {row.content}, Date: {row.date}
                    </li>
                ))}
            </ul>
        </div>
    );
    
    <div>My name is Tahsin</div>
}