# Test task for table with pagination

## Description

This app shows music received using Spotify API. 

As this api has a lot of restricitions, and maximum size of results for any endpoint is limited to 50, I just call it a few times to 
get the search results for first eight latin letters (a, b, c ...).

Sometimes token could expire, in this case data will be taken from mock.json file.

All requirements were implemented: 
* Sorting ascending and descending
* Maximum items on page - 50
* Filtering by all columns