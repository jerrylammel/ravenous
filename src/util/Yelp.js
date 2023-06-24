const apiKey = "zyFOErAscU0qdp0t9kLgjcOJVmrO2gajMuvMb3T_0UAlvkSK7EkHiXqqDiawIhZ1zl9jf6KnMopJWoG-1_VPI0YkgG-YM7Q7rSTQ_-bfoHQPBEu26pGD0FC2iuiWZHYx";
const Yelp = {};
Yelp.search = function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.busineses) {
            return jsonResponse.busineses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.imageSrc,
                    name: business.name,
                    address: business.address,
                    city: business.city,
                    state: business.state,
                    zipCode: business.zipCode,
                    category: business.category,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                }
            });
        }
    });
};

export default Yelp;