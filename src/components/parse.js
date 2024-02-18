import React, { useState, useEffect } from 'react';
import * as Papa from 'papaparse';

export function CSVReader() {
  const [csvData, setCsvData] = useState([]);
  const [header, setHeader] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/filtered_tweets_cancelled.csv');
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          quoteChar: '"',
          newline: "\n",
          complete: function(results) {
            setCsvData(results.data);
            setHeader(results.meta.fields);
          }
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {csvData.length > 0 && header.length > 0 && (
        <table>
          <thead>
            <tr>
              {header.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {header.map((field, index) => (
                  <td key={index}>
                    {row[field] && (
                      <div dangerouslySetInnerHTML={{ __html: row[field].replace(/\n/g, '<br />') }} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CSVReader;