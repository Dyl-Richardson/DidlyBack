import SQLite from "sqlite-async";

export let events = ""

async function getAllEvents() {
    const db = await SQLite.open('./db/database')

    const allEvents = await db.all(`SELECT * FROM events`)

    for (const event of allEvents) {
        const dates = await db.all(`SELECT event_date AS date, id FROM dates_by_event WHERE event_id=?`, [event.id])
        event.dates = dates

        for (const date of dates) {
            const attendees = await db.all(`SELECT attendee, available FROM attendees_by_date WHERE date_id=?`, [date.id])
            date.attendees = attendees
        }
    }

    events = allEvents
    console.log(events);
    db.close()

    return allEvents
}
getAllEvents()

// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getEventById(id) {
    const db = await SQLite.open("./db/database");

    const eventId = await db.all(
        "SELECT * FROM events WHERE id = ? ", [id]
    )

    console.log(eventId);
    db.close();
    return eventId;
}
// getEventById(1)
// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function addDateToEvent(id, date) {
    const db = await SQLite.open("./db/database");

    console.log(id, date);

    const addDate = await db.run(
        "INSERT INTO dates_by_event (event_id, event_date) VALUES (?, ?)", [id, date]
    );

    console.log(addDate);
    db.close();
    return addDate;
}
// addDateToEvent(1, '2021-12-05')
// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function addAttendeeToEvent(id, attendee, available) {
    const db = await SQLite.open("./db/database");

    const eventId = await db.all(
        "INSERT INTO attendees_by_date(date_id, attendee, available) VALUES (?, ?, ?)", [id, attendee, available]
    )

    console.log(eventId);
    db.close();
    return eventId;
}
// addAttendeeToEvent(1, 'test', 0)
// getAllEvent()
// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function deleteDate(date) {
    const db = await SQLite.open("./db/database");

    const eventId = await db.all(
        "DELETE FROM dates_by_event WHERE event_date = ?", [date]
    )

    console.log(eventId);
    db.close();
    return eventId;
}
// deleteDate('2021-12-05')
// getAllEvent()
// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function deleteEvent(id) {
    const db = await SQLite.open("./db/database");

    const eventId = await db.all(
        "DELETE FROM events WHERE id = ?", [id]
    )

    console.log(eventId);
    db.close();
    return eventId;
}
// deleteEvent(3)
// getAllEvent()
// !----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function editEvent(name, oldName) {
    const db = await SQLite.open("./db/database");

    const eventId = await db.all(
        "UPDATE events SET event_name = ? WHERE event_name = ?", [name, oldName]
    )

    console.log(eventId);
    db.close();
    return eventId;
}

// editEvent('test update')
// getAllEvent()