import csv
import os
from openai import OpenAI

cwd = os.path.dirname(os.path.abspath(__file__))
print(cwd)

# UNCOMMENT IF YOU WANT TO RUN THE PROGRAM
KEY = ""
client = OpenAI(api_key = KEY)

input_filename = "base_log.csv"

output_filename = "filtered_tweets_cancelled.csv"

# Construct the absolute file paths
input_filepath = os.path.join(cwd, input_filename)
output_filepath = os.path.join(cwd, output_filename)

iprompt = r"""I will give you content.
           This information is about bus cancellation.
           Make sure you do not miss a bus. If there are x 24hour_times in the sentence, you should output x number of buses.
           I want you to carefully find the main information that is conveyed through this content.
           You must strictly use this format to give a generated response: HH:MM, bus number __, departing __ (to __ if available) has been cancelled.
           If multiple buses have been cancelled in one content, I want you to create a new line and repeat.
           Here is your content: """

# Define an empty list to store filtered tweets
filtered_tweets = []

with open(input_filepath, 'r', newline='', encoding='utf-8') as input_file:
    # Create a CSV reader object
    reader = csv.DictReader(input_file)
    
    # Iterate over each row in the input CSV file
    for row in reader:
        # Check if the tweet content contains the keyword "cancelled"
        if "cancelled" in row['content'].lower():
            # iprompt.append(row['content'])
            prompt = row['content']
            # print(iprompt)
            # print(prompt)
            
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{ "role": "system", "content": iprompt}, {"role": "user", "content": prompt}],
                max_tokens=100
            )
            generated_text = response.choices[0].message.content

            print(generated_text)
            # generated_text = generated_text.replace('\n', '\\n')
            # num_newlines = generated_text.count('\\n')
            # print(generated_text)

            # If it does, add the tweet content and date to the filtered_tweets list
            filtered_tweets.append((generated_text, row['date']))


with open(output_filepath, 'w', newline='', encoding='utf-8') as output_file:
    # Create a CSV writer object
    writer = csv.writer(output_file)
    
    # Write the header row
    writer.writerow(['Content', 'Date'])
    
    # Write each filtered tweet to the output CSV file
    for response, date in filtered_tweets:
        writer.writerow([response, date])
