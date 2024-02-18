# PeteAlerts
Transit Bus cancellations in Peterborough are only reported through X (Twitter). Due to the bus cancellations being updated on only one platform, it limits the reach of the cancellation message to its proper audience and increases inconvenience. 

### What we usesd
HTML, CSS, Python, Javascript, React and OpenAI


## API's Implement OpenAI
PeteALERTS uses keywords such as the bus number and the time, to tell the user when and which bus got cancelled, using OpenAI to frame it in a particularly concise manner.


## React
We used React to open, read and display CSV files. React is a front-end library that was primarily used to create our app. We used the Papa Parse package to read the CSV file and parse through it. Once the data was parsed, the next step was to go line by line through it and present it in an organized and easily readable manner in the app. We also added the push notification such that each time a new dataset was added to the CSV file, it would trigger a notification.


