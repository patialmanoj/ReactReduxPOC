import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const beers = [
  {
    id: "react-flux-building-applications",
    title: "Heineken",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    cost: "$123",
    origin: "Italy",
    description: "Its awesome and healthy"
  },
  {
    id: "clean-code",
    title: "Budweiser",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    cost: "$344",
    origin: "Spain",
    description: "Its awesome and healthy"
  },
  {
    id: "architecture",
    title: "Guinness",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    cost: "$212",
    origin: "England",
    description: "Its awesome and healthy"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Carlsberg",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    cost: "$324",
    origin: "India",
    description: "Its awesome and healthy"
  },
  {
    id: "web-components-shadow-dom",
    title: "Miller Lite",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    cost: "$234",
    origin: "Germany",
    description: "Its awesome and healthy"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (beer) => {
  return replaceAll(beer.title, ' ', '-');
};

class BeerApi {
  static getAllBeerData() {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   resolve(Object.assign([], beers));
      // }, delay);
      let request = new Request('http://localhost:59526/beerapi/values/oeGSxs', {
        method :'get',
        mode: 'cors',
        origin: 'http://localhost:59526',
      
        headers: new Headers({
            'Content-Type':  "text/plain"
          })
        
      });

      fetch(request).then(function(response) {
        debugger;
        response.json().then(function(data) {
          console.log(data);
          resolve(Object.assign([], beers));
        });
       
      }).catch(function(err) {
        // Error :(
          debugger;
      });

    });
  }

static saveBeer(beer) {
    beer = Object.assign({}, beer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (beer.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (beer.id) {
          const existingCourseIndex = beers.findIndex(a => a.id == beer.id);
          beers.splice(existingCourseIndex, 1, beer);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          beer.id = generateId(beer);
          beer.watchHref = `http://www.pluralsight.com/courses/${beer.id}`;
          beers.push(beer);
        }

        resolve(beer);
      }, delay);
    });
  }

  static deleteBeer(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = beers.findIndex(beer => {
          beer.id == courseId;
        });
        beers.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BeerApi;
