const request = require('supertest');

const server = 'http://localhost:3000';
// const { Demo } = require('../../client/src/containers/Demo.jsx')
// import Demo from '../../client/src/containers/Demo'
// console.log(Demo,'----->Demo')

describe('/graphql', () => {

  describe ('POST', () => {
    it('responds with 200 status on valid request', () => {
      return request(server)
        .post('/graphql')
        .set('Content-Type', 'application/json')
        .send({ "query": "{countries{id}}" })
        .expect(200)
    });

    it('responds with 400 status on invalid request', () => {
      return request(server)
        .post('/graphql')
        .set('Content-Type', 'application/json')
        .send("Invalid query")
        .expect(400)
    });
  });

  describe('POST || correct data in response body', () => {

    const countries = {
      "countries": [
        {
          "id": "1",
          "name": "Andorra"
        },
        {
          "id": "2",
          "name": "Bolivia"
        },
        {
          "id": "3",
          "name": "Armenia"
        },
        {
          "id": "4",
          "name": "American Samoa"
        },
        {
          "id": "5",
          "name": "Aruba"
        }
      ]
    };

    const countriesAndCities = {
      "countries": [
        {
          "id": "1",
          "name": "Andorra"
        },
        {
          "id": "2",
          "name": "Bolivia"
        },
        {
          "id": "3",
          "name": "Armenia"
        },
        {
          "id": "4",
          "name": "American Samoa"
        },
        {
          "id": "5",
          "name": "Aruba"
        }
      ],
      "cities": [
          {
            "id": "1",
            "name": "El Tarter"
          },
          {
            "id": "2",
            "name": "La Massana"
          },
          {
            "id": "3",
            "name": "Canillo"
          },
          {
            "id": "4",
            "name": "Andorra la Vella"
          },
          {
            "id": "5",
            "name": "Jorochito"
          },
          {
            "id": "6",
            "name": "Tupiza"
          },
          {
            "id": "7",
            "name": "Puearto Pailas"
          },
          {
            "id": "8",
            "name": "Capinota"
          },
          {
            "id": "9",
            "name": "Camargo"
          },
          {
            "id": "10",
            "name": "Villa Serrano"
          },
          {
            "id": "11",
            "name": "Voskevaz"
          },
          {
            "id": "12",
            "name": "Gavarr"
          },
          {
            "id": "13",
            "name": "Nizami"
          },
          {
            "id": "14",
            "name": "Metsavan"
          },
          {
            "id": "15",
            "name": "Hnaberd"
          },
          {
            "id": "16",
            "name": "Tāfuna"
          },
          {
            "id": "17",
            "name": "Aūa"
          },
          {
            "id": "18",
            "name": "Malaeimi"
          },
          {
            "id": "19",
            "name": "Taulaga"
          },
          {
            "id": "20",
            "name": "Fagatogo"
          },
          {
            "id": "21",
            "name": "Oranjestad"
          },
          {
            "id": "51",
            "name": "Paradera"
          }
        ]
    }

    const countryId = {
        "country": {
          "id": "1",
          "name": "Andorra",
          "capital": "Andorra la Vella"
        }
    }

    const countryIdWithCities = {
      "country": {
        "id": "1",
        "name": "Andorra",
        "cities": [
          {
            "id": "1",
            "name": "El Tarter",
            "population": 1052
          },
          {
            "id": "2",
            "name": "La Massana",
            "population": 7211
          },
          {
            "id": "3",
            "name": "Canillo",
            "population": 3292
          },
          {
            "id": "4",
            "name": "Andorra la Vella",
            "population": 20430
          }
        ]
      }
    }

    const countryIdWithCitiesAndCities = {
        "country": {
          "id": "1",
          "name": "Andorra",
          "cities": [
            {
              "id": "1",
              "name": "El Tarter",
              "population": 1052
            },
            {
              "id": "2",
              "name": "La Massana",
              "population": 7211
            },
            {
              "id": "3",
              "name": "Canillo",
              "population": 3292
            },
            {
              "id": "4",
              "name": "Andorra la Vella",
              "population": 20430
            }
          ]
        },
        "cities": [
          {
            "id": "1",
            "name": "El Tarter"
          },
          {
            "id": "2",
            "name": "La Massana"
          },
          {
            "id": "3",
            "name": "Canillo"
          },
          {
            "id": "4",
            "name": "Andorra la Vella"
          },
          {
            "id": "5",
            "name": "Jorochito"
          },
          {
            "id": "6",
            "name": "Tupiza"
          },
          {
            "id": "7",
            "name": "Puearto Pailas"
          },
          {
            "id": "8",
            "name": "Capinota"
          },
          {
            "id": "9",
            "name": "Camargo"
          },
          {
            "id": "10",
            "name": "Villa Serrano"
          },
          {
            "id": "11",
            "name": "Voskevaz"
          },
          {
            "id": "12",
            "name": "Gavarr"
          },
          {
            "id": "13",
            "name": "Nizami"
          },
          {
            "id": "14",
            "name": "Metsavan"
          },
          {
            "id": "15",
            "name": "Hnaberd"
          },
          {
            "id": "16",
            "name": "Tāfuna"
          },
          {
            "id": "17",
            "name": "Aūa"
          },
          {
            "id": "18",
            "name": "Malaeimi"
          },
          {
            "id": "19",
            "name": "Taulaga"
          },
          {
            "id": "20",
            "name": "Fagatogo"
          },
          {
            "id": "21",
            "name": "Oranjestad"
          },
          {
            "id": "51",
            "name": "Paradera"
          }
        ]
    }

    const citiesByCountryId = {
      "citiesByCountry": [
        {
          "id": "1"
        },
        {
          "id": "2"
        },
        {
          "id": "3"
        },
        {
          "id": "4"
        }
      ]
    }

    const countryById = {
      "country": {
        "id": "1"
      }
    }
    
    const countryByIdAll = {
      "country": {
        "id": "1",
        "name": "Andorra",
        "capital": "Andorra la Vella",
        "cities": [
          {
            "id": "1",
            "country_id": "1",
            "name": "El Tarter",
            "population": 1052
          },
          {
            "id": "2",
            "country_id": "1",
            "name": "La Massana",
            "population": 7211
          },
          {
            "id": "3",
            "country_id": "1",
            "name": "Canillo",
            "population": 3292
          },
          {
            "id": "4",
            "country_id": "1",
            "name": "Andorra la Vella",
            "population": 20430
          }
        ]
      }
    }

    const citiesByCountryIdAll = {
      "citiesByCountry": [
        {
          "id": "1",
          "country_id": "1",
          "name": "El Tarter",
          "population": 1052
        },
        {
          "id": "2",
          "country_id": "1",
          "name": "La Massana",
          "population": 7211
        },
        {
          "id": "3",
          "country_id": "1",
          "name": "Canillo",
          "population": 3292
        },
        {
          "id": "4",
          "country_id": "1",
          "name": "Andorra la Vella",
          "population": 20430
        }
      ]
    }

    

    it('clears cache', async () => {
      return request(server)
        .get('/clearCache')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Redis cache successfully cleared")
        })
    })
























    // clear cache with reset all button?
    it('clears cache with `Reset All` button', async () => {
      return request(server)
        .get('/clearCache')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Redis cache successfully cleared")
        })
    })



















    it('returns correct data when cache is empty || {countries{id name}}', async () => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({ "query": "{countries{id name}}" })
        .expect(200)
        .then((response) => {
          // if (err) return done(err);
          expect(response.body.data).toEqual(countries)
        });
    });

    it('combines data for multiple queries from cache and database || {countries{id name} cities {id name}}', async () => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({ "query": "{countries{id name} cities {id name}}" })
        .expect(200)
        .then((response) => {
          // if (err) return done(err);
          expect(response.body.data).toEqual(countriesAndCities)
        });
    });

    it('combines data for one query from cache and database || {country (id: 1) {id name capital}}', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({ "query": "{country (id: 1) {id name capital}}" })
        .expect(200)
        .then((response) => {
          // if (err) return done(err);
          expect(response.body.data).toEqual(countryId)
        });
    });

    it('combines data for one nested query from cache and database || {country (id: 1) {id name cities {id name population}}}', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({ "query": "{country (id: 1) {id name cities {id name population}}}" })
        .expect(200)
        .then((response) => {
          // if (err) return done(err);
          expect(response.body.data).toEqual(countryIdWithCities)
        });
    });


    // query citiesbycountry id:1
    it('combines data for single query for citiesByCountryId || { citiesByCountry (country_id:1) { id  }} ', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({"query": "{ citiesByCountry (country_id:1) { id  }}"})
        .expect(200)
        .then((response) => {
          expect(response.body.data).toEqual(citiesByCountryId)
        })
    })


    // query country by id: 1 {id}
    it('combines data for single query for countryById || { country (id:1) { id  }  }  ', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({"query": "{ country (id:1) { id  }  } "})
        .expect(200)
        .then((response) => {
          expect(response.body.data).toEqual(countryById)
        })
    })

    // query cities by country with id1: { citiesByCountry (country_id:1) { id country_id name population  }  } 
    it('combines data for multiple queries for citiesByCountry || { citiesByCountry (country_id:1) { id country_id name population  }  }   ', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({"query": "{ citiesByCountry (country_id:1) { id country_id name population  }  } "})
        .expect(200)
        .then((response) => {
          expect(response.body.data).toEqual(citiesByCountryIdAll)
        })
    })
    
    // query multiple queries by countryByID: { country (id:1) { id name capital cities { id country_id name population  }  }  } 
    it('combines data for multiple queries for countryByID || { country (id:1) { id name capital cities { id country_id name population  }  }  }    ', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({"query": "{ country (id:1) { id name capital cities { id country_id name population  }  }  } "})
        .expect(200)
        .then((response) => {
          expect(response.body.data).toEqual(countryByIdAll)
        })
    })
    
    it('returns data for multiple queries, one of them nested, with different datatype || {country (id: 1) {id name cities {id name population}} cities { id name }}', async() => {
      return request(server)
        .post('/graphql')
        .set("Accept", "application/json")
        .send({ "query": "{country (id: 1) {id name cities {id name population}} cities { id name }}" })
        .expect(200)
        .then((response) => {
          // if (err) return done(err);
          expect(response.body.data).toEqual(countryIdWithCitiesAndCities)
        });
    });
  });
  
});

