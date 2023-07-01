Ravenous is an App as part of the study with Codecademy, which serves only for the purpose of study.

Here’s an overview of how Ravenous should function:

As a user, I should be able to search for restaurants
As a user, I should be able to view a list of restaurants returned by the Yelp API
As a user, I should be able to sort through restaurants using a filter

The goal the project is to build a Yelp-like App.

To bypass the CORS restriction, we can use an API called CORS Anywhere. CORS Anywhere(https://cors-anywhere.herokuapp.com/) will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

In your own browser, visit https://cors-anywhere.herokuapp.com/corsdemo(https://cors-anywhere.herokuapp.com/corsdemo) and click “Request temporary access to the demo server”
Back in your code, prepend the URL path you passed to the first argument in fetch() with the following:
https://cors-anywhere.herokuapp.com/

return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
The duration of your access for using https://cors-anywhere.herokuapp.com/corsdemo may expire — to re-enable it, visit the site and click “Request temporary access to the demo server” once more.