import SQLite from "sqlite-async";

async function getAllEvent() {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const allEvent = await db.all(
        // "SELECT event_name, event_author, event_description, event_dates, attendee, available FROM event NATURAL JOIN event_date, event_attendees"
        "SELECT * FROM event_attendees"
    );

    console.log(allEvent);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return allEvent;
}

// getAllEvent()

async function getEventById(id) {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const eventId = await db.all(
        "SELECT * FROM event WHERE id = ? ", [id]
    )

    console.log(eventId);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return eventId;
}

// getEventById(1)

async function addDateToEvent(id, date) {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const addEvent = await db.exec(
        "INSERT INTO event_date (event_id, event_dates) VALUES (event_id = ?, event_date = ?)", [id], [date]
    )

    console.log(addEvent);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return addEvent;
}

addDateToEvent(1, "2021-12-04")

async function addAttendeeToEvent() {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const eventId = await db.all()

    console.log(eventId);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return eventId;
}

async function deleteEvent() {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const eventId = await db.all()

    console.log(eventId);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return eventId;
}

async function editEvent() {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const eventId = await db.all()

    console.log(eventId);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return eventId;
}