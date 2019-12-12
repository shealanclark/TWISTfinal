#! /usr/bin/env node

// This is a backup populatedb.js file for our TWIST project.
// This will populate the database with collections(a.k.a. tables) and dummy information.

// Command to populate: node populatedb 'link to the mongoDB database'
// Replace <password> with the password to the respective user.
// If the console returns "cannot read property split of null,
//   try again without the single quotation marks.

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You must specify a valid mongodb URL as the first argument');
    return
}
*/

// Necessities (middleware, objects corresponding to tables, mongoDB stuff)
var async = require('async')
var BlockReference = require('./models/blockReferenceTable')
var Highschool = require('./models/highschool')
var Person = require('./models/people')
var Session = require('./models/perSessionInfo')
var RoomReference = require('./models/roomReferenceTable')
var Speaker = require('./models/speaker')
var TopicReference = require('./models/topicReferenceTable')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// the actual data-containing arrays (rows in the database)
var blockreferences = []
var highschools = []
var people = []
var sessions = []
var roomreferences = []
var speakers = []
var topicreferences = []

// the Create functions, each containing a constructor function
function blockReferenceCreate(blockNumber, blockStart, blockEnd, cb) {
  // Import parameters
  let blockreferencedetail = {		// Mongo's automatically assigned ID can be used here.
	  blockNumber: blockNumber,
	  blockStart: blockStart,
	  blockEnd: blockEnd
  }

  // Create a new Block Reference, based on parameters
  var blockreference = new BlockReference(blockreferencedetail);
       
  // Throw error if necessary; otherwise append to array
  blockreference.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Block Reference: ' + blockreference);
    blockreferences.push(blockreference);
    cb(null, blockreference);
  });
}

function highschoolCreate(name, counselor, counselorEmail, counselorPhone, address, city, state, zip, cb) {
  // Import parameters
  let highschooldetail = {		// Mongo's automatically assigned ID can be used here
	  name: name,
	  counselor: counselor,
	  counselorEmail: counselorEmail,
	  counselorPhone: counselorPhone,
	  address: address,
	  city: city,
	  state: state,
	  zip: zip
  }

  // Create a new Highschool, based on parameters
  var highschool = new Highschool(highschooldetail);
       
  // Throw error if necessary; otherwise append to array
  highschool.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Highschool: ' + highschool);
    highschools.push(highschool);
    cb(null, highschool);
  });
}

function personCreate(lastName, firstName, role, topic1, topic2, topic3, topic4, topic5, topic6, highschoolName, email, address, city, state, zip, block1, block2, block3, block4, cb) {
  // Import parameters
  let persondetail = {		// Mongo's automatically assigned ID will be used here
	  lastName: lastName,
	  firstName: firstName,
	  role: role,
	  topic1: topic1,
	  topic2: topic2,
	  topic3: topic3,
	  topic4: topic4,
	  topic5: topic5,
	  topic6: topic6,
	  highschoolName: highschoolName,
	  email: email,
	  address: address,
	  city: city,
	  state: state,
	  zip: zip,
	  block1: block1,
	  block2: block2,
	  block3: block3,
	  block4: block4
  }

  // Create a new Person, based on parameters
  var person = new Person(persondetail);
       
  // Throw error if necessary; otherwise append to array
  person.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Person: ' + person);
    people.push(person);
    cb(null, person);
  });
}

function sessionCreate(topicName, blockNumber, roomNumber, speakerLastName, speakerFirstName, participants, cb) {
  // Import parameters
  let sessiondetail = {		// Mongo's automatically assigned ID could be used here
	  topicName: topicName,
	  blockNumber: blockNumber,
	  roomNumber: roomNumber,
	  speakerLastName: speakerLastName,
	  speakerFirstName: speakerFirstName,
	  participants: participants
  }

  // Create a new Session, based on parameters
  var session = new Session(sessiondetail);
       
  // Throw error if necessary; otherwise append to array
  session.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Session: ' + session);
    sessions.push(session);
    cb(null, session);
  });
}

function roomReferenceCreate(roomNumber, capacity, cb) {
  // Import parameters
  let roomreferencedetail = {
	  roomNumber: roomNumber,
	  capacity: capacity
  }

  // Create a new Room Reference, based on parameters
  var roomreference = new RoomReference(roomreferencedetail);
       
  // Throw error if necessary; otherwise append to array
  roomreference.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Room Reference: ' + roomreference);
    roomreferences.push(roomreference);
    cb(null, roomreference);
  });
}

function speakerCreate(firstName, lastName, email, phone, topicName, cb) {
  // Import parameters
  let speakerdetail = {		// Mongo's automatically assigned ID can be used here
	  firstName: firstName,
	  lastName: lastName,
	  email: email,
	  phone: phone,
	  topicName: topicName
  }

  // Create a new Speaker, based on parameters
  var speaker = new Speaker(speakerdetail);
       
  // Throw error if necessary; otherwise append to array
  speaker.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Speaker: ' + speaker);
    speakers.push(speaker);
    cb(null, speaker);
  });
}

function topicReferenceCreate(topicName, topicDesc, cb) {
  // Import parameters
  let topicreferencedetail = {		// Mongo's automatically assigned ID can be used here
	  topicName: topicName,
	  topicDesc: topicDesc
  }

  // Create a new Topic Reference, based on parameters
  var topicreference = new TopicReference(topicreferencedetail);
       
  // Throw error if necessary; otherwise append to array
  topicreference.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Topic Reference: ' + topicreference);
    topicreferences.push(topicreference);
    cb(null, topicreference);
  });
}

// These call the constructor functions above with dummy parameters (will be data in the database)
//   which can be input here (mind the order)
function createBlockReferences(cb) {
    async.parallel([
        function(callback) {
          blockReferenceCreate(1, '1970-12-31T09:30:00.000+00:00', '1970-12-31T10:00:00.000+00:00', callback)
        },
		function(callback) {
          blockReferenceCreate(2, '1970-12-31T10:10:00.000+00:00', '1970-12-31T10:40:00.000+00:00', callback)
        },
		function(callback) {
          blockReferenceCreate(3, '1970-12-31T10:50:00.000+00:00', '1970-12-31T11:20:00.000+00:00', callback)
        },
		function(callback) {
          blockReferenceCreate(4, '1970-12-31T11:30:00.000+00:00', '1970-12-31T12:15:00.000+00:00', callback)
        }
    ],
    // optional callback
    cb);
}

function createHighschools(cb) {
    async.parallel([
        function(callback) {
          highschoolCreate("dummyHigh", "dummyCounselor", "dummy@dummy.com", "123-456-7890", "dummyAddress", "dummyCity", "ZZ", "12345", callback)
        }
    ],
    // optional callback
    cb);
}

function createPeople(cb) {
    async.parallel([
        function(callback) {
          personCreate("Doe", "Jane", "dummyRole", "dummyTopic1", "dummyTopic2", "dummyTopic3", "dummyTopic4", "dummyTopic5", "dummyTopic6", "dummyHigh", "dummy@dummy.com", "dummyAddress", "dummyCity", "ZZ", "12345", ObjectId(""), ObjectId(""), ObjectId(""), ObjectId(""), callback)
        }
    ],
    // optional callback
    cb);
}

function createSessions(cb) {
    async.parallel([
        function(callback) {
			// (topicName, blockNumber, roomNumber, speakerLastName, speakerFirstName, participants, cb)
          sessionCreate("dummyTopic", 1, "dummyRoom", "Doe", "John", "dummyParticipants", callback)
        }
    ],
    // optional callback
    cb);
}

function createRoomReferences(cb) {
    async.parallel([
        function(callback) {
          roomReferenceCreate("dummyRoom", 0, callback)
        }
    ],
    // optional callback
    cb);
}

function createSpeakers(cb) {
    async.parallel([
        function(callback) {
          speakerCreate("Doe", "John", "dummy@dummy.com", "123-456-7890", "dummyTopic", callback)
        }
    ],
    // optional callback
    cb);
}

function createTopicReferences(cb) {
    async.parallel([
        function(callback) {
          topicReferenceCreate("Chiropractic Care", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Dentistry", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Engineering", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Finance", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Graphic Design", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Interior Architecture", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Law Enforcement", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Legal Services", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Non-Profit Administration", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Professional Pilot", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Realty", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Research Scientist", "Description", callback)
        },
		function(callback) {
          topicReferenceCreate("Zoo Veterinarian Medicine", "Description", callback)
        }
    ],
    // optional callback
    cb);
}


// async will call the functions to call the respective constructor functions
//   and to populate the database with the resulting arrays (tables) of objects (entries)
async.series([
    createBlockReferences,
    createHighschools,
    createPeople,
	createSessions,
	createRoomReferences,
	createSpeakers,
	createTopicReferences
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Created topic: '+topicreferences);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});