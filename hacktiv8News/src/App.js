import React, { Component } from 'react'

import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Navigator
} from 'react-native'

import { Header, News, Peoples } from './components'

class App extends Component {
  constructor () {
    super()
    this.state = {
      news: newsDummy,
      peoples: peopleDummy,
      searchKey: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      searchKey: event.nativeEvent.text
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View>
          <Header searchKey={this.state.searchKey} handleChange={this.handleChange}/>
          <News news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const peopleDummy = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/",
      "http://swapi.co/api/films/7/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "http://swapi.co/api/vehicles/14/",
      "http://swapi.co/api/vehicles/30/"
    ],
    "starships": [
      "http://swapi.co/api/starships/12/",
      "http://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.co/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/5/",
      "http://swapi.co/api/films/4/",
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "http://swapi.co/api/people/2/"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "http://swapi.co/api/planets/8/",
    "films": [
      "http://swapi.co/api/films/5/",
      "http://swapi.co/api/films/4/",
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/",
      "http://swapi.co/api/films/7/"
    ],
    "species": [
      "http://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "http://swapi.co/api/people/3/"
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [
      "http://swapi.co/api/starships/13/"
    ],
    "created": "2014-12-10T15:18:20.704000Z",
    "edited": "2014-12-20T21:17:50.313000Z",
    "url": "http://swapi.co/api/people/4/"
  },
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "http://swapi.co/api/planets/2/",
    "films": [
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/",
      "http://swapi.co/api/films/7/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "http://swapi.co/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "http://swapi.co/api/people/5/"
  },
  {
    "name": "Owen Lars",
    "height": "178",
    "mass": "120",
    "hair_color": "brown, grey",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "52BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/5/",
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:52:14.024000Z",
    "edited": "2014-12-20T21:17:50.317000Z",
    "url": "http://swapi.co/api/people/6/"
  },
  {
    "name": "Beru Whitesun lars",
    "height": "165",
    "mass": "75",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "47BBY",
    "gender": "female",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/5/",
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:53:41.121000Z",
    "edited": "2014-12-20T21:17:50.319000Z",
    "url": "http://swapi.co/api/people/7/"
  },
  {
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:57:50.959000Z",
    "edited": "2014-12-20T21:17:50.321000Z",
    "url": "http://swapi.co/api/people/8/"
  },
  {
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [
      "http://swapi.co/api/starships/12/"
    ],
    "created": "2014-12-10T15:59:50.509000Z",
    "edited": "2014-12-20T21:17:50.323000Z",
    "url": "http://swapi.co/api/people/9/"
  },
  {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/20/",
    "films": [
      "http://swapi.co/api/films/5/",
      "http://swapi.co/api/films/4/",
      "http://swapi.co/api/films/6/",
      "http://swapi.co/api/films/3/",
      "http://swapi.co/api/films/2/",
      "http://swapi.co/api/films/1/"
    ],
    "species": [
      "http://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "http://swapi.co/api/vehicles/38/"
    ],
    "starships": [
      "http://swapi.co/api/starships/48/",
      "http://swapi.co/api/starships/59/",
      "http://swapi.co/api/starships/64/",
      "http://swapi.co/api/starships/65/",
      "http://swapi.co/api/starships/74/"
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
    "url": "http://swapi.co/api/people/10/"
  }
]

const newsDummy = [
  {
    "created_at": "2016-06-12T21:06:59.000Z",
    "title": "A SoundCloud client in React and Redux",
    "url": "http://www.robinwieruch.de/the-soundcloud-client-in-react-redux/",
    "author": "rwieruch",
    "points": 253,
    "story_text": null,
    "comment_text": null,
    "num_comments": 69,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1465765619,
    "_tags": [
      "story",
      "author_rwieruch",
      "story_11890229"
    ],
    "objectID": "11890229",
    "_highlightResult": {
      "title": {
        "value": "A SoundCloud client in React and <em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://www.robinwieruch.de/the-soundcloud-client-in-react-<em>redux</em>/",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "rwieruch",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2014-11-21T01:33:31.000Z",
    "title": "Systemd redux: The end of Linux",
    "url": "http://blog.lusis.org/blog/2014/11/20/systemd-redux/",
    "author": "bcantrill",
    "points": 235,
    "story_text": "",
    "comment_text": null,
    "num_comments": 463,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1416533611,
    "_tags": [
      "story",
      "author_bcantrill",
      "story_8639317"
    ],
    "objectID": "8639317",
    "_highlightResult": {
      "title": {
        "value": "Systemd <em>redux</em>: The end of Linux",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://blog.lusis.org/blog/2014/11/20/systemd-<em>redux</em>/",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "bcantrill",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_text": {
        "value": "",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-01-20T19:53:07.000Z",
    "title": "Why React/Redux is inferior as a paradigm",
    "url": "http://staltz.com/why-react-redux-is-an-inferior-paradigm.html",
    "author": "scottcorgan",
    "points": 198,
    "story_text": null,
    "comment_text": null,
    "num_comments": 143,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1453319587,
    "_tags": [
      "story",
      "author_scottcorgan",
      "story_10940845"
    ],
    "objectID": "10940845",
    "_highlightResult": {
      "title": {
        "value": "Why React/<em>Redux</em> is inferior as a paradigm",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://staltz.com/why-react-<em>redux</em>-is-an-inferior-paradigm.html",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "scottcorgan",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2015-07-05T07:25:42.000Z",
    "title": "Redux: Atomic Flux with Hot Reloading",
    "url": "https://github.com/gaearon/redux",
    "author": "monort",
    "points": 186,
    "story_text": "",
    "comment_text": null,
    "num_comments": 44,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1436081142,
    "_tags": [
      "story",
      "author_monort",
      "story_9832825"
    ],
    "objectID": "9832825",
    "_highlightResult": {
      "title": {
        "value": "<em>Redux</em>: Atomic Flux with Hot Reloading",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://github.com/gaearon/<em>redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "monort",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_text": {
        "value": "",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-02-18T08:05:33.000Z",
    "title": "Mern: Build JavaScript apps using React and Redux",
    "url": "http://mern.io/",
    "author": "sinkensabe",
    "points": 175,
    "story_text": null,
    "comment_text": null,
    "num_comments": 133,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1455782733,
    "_tags": [
      "story",
      "author_sinkensabe",
      "story_11124375"
    ],
    "objectID": "11124375",
    "_highlightResult": {
      "title": {
        "value": "Mern: Build JavaScript apps using React and <em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://mern.io/",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "sinkensabe",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-10-27T14:50:06.000Z",
    "title": "Django React/Redux Base Project",
    "url": "https://github.com/Seedstars/django-react-redux-base",
    "author": "pergomes",
    "points": 175,
    "story_text": null,
    "comment_text": null,
    "num_comments": 75,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1477579806,
    "_tags": [
      "story",
      "author_pergomes",
      "story_12805514"
    ],
    "objectID": "12805514",
    "_highlightResult": {
      "title": {
        "value": "Django React/<em>Redux</em> Base Project",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://github.com/Seedstars/django-react-<em>redux</em>-base",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "pergomes",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-11-22T17:17:18.000Z",
    "title": "Katana – Modern Swift framework for creating iOS apps, inspired by React/Redux",
    "url": "https://github.com/BendingSpoons/katana-swift",
    "author": "Feanim",
    "points": 162,
    "story_text": null,
    "comment_text": null,
    "num_comments": 52,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1479835038,
    "_tags": [
      "story",
      "author_Feanim",
      "story_13015581"
    ],
    "objectID": "13015581",
    "_highlightResult": {
      "title": {
        "value": "Katana – Modern Swift framework for creating iOS apps, inspired by React/<em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://github.com/BendingSpoons/katana-swift",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "Feanim",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-05-02T22:15:56.000Z",
    "title": "Relax – A New Generation CMS on Top of React, Redux, and GraphQL",
    "url": "http://getrelax.io/",
    "author": "nikolay",
    "points": 149,
    "story_text": null,
    "comment_text": null,
    "num_comments": 58,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1462227356,
    "_tags": [
      "story",
      "author_nikolay",
      "story_11616155"
    ],
    "objectID": "11616155",
    "_highlightResult": {
      "title": {
        "value": "Relax – A New Generation CMS on Top of React, <em>Redux</em>, and GraphQL",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://getrelax.io/",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "nikolay",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2013-12-11T05:56:48.000Z",
    "title": "Call me maybe: Redis redux",
    "url": "http://aphyr.com/posts/307-call-me-maybe-redis-redux",
    "author": "llambda",
    "points": 144,
    "story_text": null,
    "comment_text": null,
    "num_comments": 23,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1386741408,
    "_tags": [
      "story",
      "author_llambda",
      "story_6886142"
    ],
    "objectID": "6886142",
    "_highlightResult": {
      "title": {
        "value": "Call me maybe: Redis <em>redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://aphyr.com/posts/307-call-me-maybe-redis-<em>redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "llambda",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-02-27T21:04:06.000Z",
    "title": "Step by Step Guide to Building React Redux Apps",
    "url": "https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.5qbuaxkrf",
    "author": "node-bayarea",
    "points": 133,
    "story_text": null,
    "comment_text": null,
    "num_comments": 29,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1456607046,
    "_tags": [
      "story",
      "author_node-bayarea",
      "story_11188484"
    ],
    "objectID": "11188484",
    "_highlightResult": {
      "title": {
        "value": "Step by Step Guide to Building React <em>Redux</em> Apps",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-<em>redux</em>-apps-using-mocks-48ca0f47f9a#.5qbuaxkrf",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "node-bayarea",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2017-02-14T17:32:39.000Z",
    "title": "Redux-query – A React/Redux library for querying and managing network state",
    "url": "https://amplitude.engineering/introducing-redux-query-7734e7215b3b",
    "author": "ryanashcraft",
    "points": 127,
    "story_text": null,
    "comment_text": null,
    "num_comments": 61,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1487093559,
    "_tags": [
      "story",
      "author_ryanashcraft",
      "story_13645293"
    ],
    "objectID": "13645293",
    "_highlightResult": {
      "title": {
        "value": "<em>Redux</em>-query – A React/<em>Redux</em> library for querying and managing network state",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://amplitude.engineering/introducing-<em>redux</em>-query-7734e7215b3b",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "ryanashcraft",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-04-15T16:19:47.000Z",
    "title": "React/Redux Links: a curated list of tutorials for React, Redux, ES6, and more",
    "url": "https://github.com/markerikson/react-redux-links",
    "author": "acemarke",
    "points": 125,
    "story_text": null,
    "comment_text": null,
    "num_comments": 32,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1460737187,
    "_tags": [
      "story",
      "author_acemarke",
      "story_11505484"
    ],
    "objectID": "11505484",
    "_highlightResult": {
      "title": {
        "value": "React/<em>Redux</em> Links: a curated list of tutorials for React, <em>Redux</em>, ES6, and more",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://github.com/markerikson/react-<em>redux</em>-links",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "acemarke",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2015-11-25T19:22:24.000Z",
    "title": "A Simple Way to Route with Redux",
    "url": "http://jlongster.com/A-Simple-Way-to-Route-with-Redux",
    "author": "jlongster",
    "points": 124,
    "story_text": null,
    "comment_text": null,
    "num_comments": 54,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1448479344,
    "_tags": [
      "story",
      "author_jlongster",
      "story_10629001"
    ],
    "objectID": "10629001",
    "_highlightResult": {
      "title": {
        "value": "A Simple Way to Route with <em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://jlongster.com/A-Simple-Way-to-Route-with-<em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "jlongster",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-04-13T14:49:47.000Z",
    "title": "Two Weird Tricks with Redux",
    "url": "http://jlongster.com/Two-Weird-Tricks-with-Redux",
    "author": "jlongster",
    "points": 122,
    "story_text": null,
    "comment_text": null,
    "num_comments": 33,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1460558987,
    "_tags": [
      "story",
      "author_jlongster",
      "story_11488633"
    ],
    "objectID": "11488633",
    "_highlightResult": {
      "title": {
        "value": "Two Weird Tricks with <em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://jlongster.com/Two-Weird-Tricks-with-<em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "jlongster",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-03-20T13:35:35.000Z",
    "title": "Full-Stack Redux Tutorial",
    "url": "http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html",
    "author": "ranit",
    "points": 113,
    "story_text": null,
    "comment_text": null,
    "num_comments": 6,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1458480935,
    "_tags": [
      "story",
      "author_ranit",
      "story_11322841"
    ],
    "objectID": "11322841",
    "_highlightResult": {
      "title": {
        "value": "Full-Stack <em>Redux</em> Tutorial",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://teropa.info/blog/2015/09/10/full-stack-<em>redux</em>-tutorial.html",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "ranit",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2014-04-30T19:47:08.000Z",
    "title": "Glacier redux",
    "url": "http://storagemojo.com/2014/04/30/glacier-redux/",
    "author": "wmf",
    "points": 112,
    "story_text": "",
    "comment_text": null,
    "num_comments": 54,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1398887228,
    "_tags": [
      "story",
      "author_wmf",
      "story_7675878"
    ],
    "objectID": "7675878",
    "_highlightResult": {
      "title": {
        "value": "Glacier <em>redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://storagemojo.com/2014/04/30/glacier-<em>redux</em>/",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "wmf",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_text": {
        "value": "",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-11-17T15:47:07.000Z",
    "title": "Show HN: LogRocket – Record and Replay for Redux Apps",
    "url": "https://logrocket.com",
    "author": "arbesfeld",
    "points": 111,
    "story_text": null,
    "comment_text": null,
    "num_comments": 30,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1479397627,
    "_tags": [
      "story",
      "author_arbesfeld",
      "story_12978427",
      "show_hn"
    ],
    "objectID": "12978427",
    "_highlightResult": {
      "title": {
        "value": "Show HN: LogRocket – Record and Replay for <em>Redux</em> Apps",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "https://logrocket.com",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "arbesfeld",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-05-02T12:39:37.000Z",
    "title": "Show HN: Discover new music through an infinite suggestion graph (React/Redux)",
    "url": "http://panther.audio/",
    "author": "joshwcomeau",
    "points": 108,
    "story_text": null,
    "comment_text": null,
    "num_comments": 39,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1462192777,
    "_tags": [
      "story",
      "author_joshwcomeau",
      "story_11610832",
      "show_hn"
    ],
    "objectID": "11610832",
    "_highlightResult": {
      "title": {
        "value": "Show HN: Discover new music through an infinite suggestion graph (React/<em>Redux</em>)",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://panther.audio/",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "joshwcomeau",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2016-08-09T03:42:00.000Z",
    "title": "IO-808: A Web-Based TR-808 Drum Machine Using React, Redux, and Web Audio API",
    "url": "http://io808.com/",
    "author": "sebg",
    "points": 106,
    "story_text": null,
    "comment_text": null,
    "num_comments": 18,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1470714120,
    "_tags": [
      "story",
      "author_sebg",
      "story_12252462"
    ],
    "objectID": "12252462",
    "_highlightResult": {
      "title": {
        "value": "IO-808: A Web-Based TR-808 Drum Machine Using React, <em>Redux</em>, and Web Audio API",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://io808.com/",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "sebg",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "created_at": "2013-05-21T08:38:23.000Z",
    "title": "Porting to Python 3 Redux",
    "url": "http://lucumr.pocoo.org/2013/5/21/porting-to-python-3-redux/",
    "author": "dous",
    "points": 98,
    "story_text": "",
    "comment_text": null,
    "num_comments": 18,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1369125503,
    "_tags": [
      "story",
      "author_dous",
      "story_5742482"
    ],
    "objectID": "5742482",
    "_highlightResult": {
      "title": {
        "value": "Porting to Python 3 <em>Redux</em>",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "url": {
        "value": "http://lucumr.pocoo.org/2013/5/21/porting-to-python-3-<em>redux</em>/",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": [
          "redux"
        ]
      },
      "author": {
        "value": "dous",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_text": {
        "value": "",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  }
]

export default App
