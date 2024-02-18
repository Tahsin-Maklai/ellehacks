# PeteALERTS
Transit Bus cancellations in Peterborough are only reported through X (Twitter). Due to the bus cancellations being updated on only one platform, it limits the reach of the cancellation message to its proper audience and increases inconvenience. 

## How to use it
The database is located in `public/base_log.csv` the python file located in the `public` folder scans the csv file for the keyword "cancelled", after which it uses OpenAI's API to format an ouput to add to a list. This list is then used to write information onto `filtered_tweets_cancelled.csv`.

A React framework is used to read and parse this CSV file, which is then displayed on the front end of our application. If a new entry is added onto the database, a notification is sent through the application with the relevant information.

### What we used
HTML, CSS, Python, Javascript, React and OpenAI

## OpenAI API Implemented
PeteALERTS uses keywords such as the bus number and the time, to tell the user when and which bus got cancelled, using OpenAI to frame it in a particularly concise manner.

## React
We used React to open, read and display CSV files. React is a front-end library that was primarily used to create our app. We used the Papa Parse package to read the CSV file and parse through it. Once the data was parsed, the next step was to go line by line through it and present it in an organized and easily readable manner in the app. We also added the push notification such that each time a new dataset was added to the CSV file, it would trigger a notification.
