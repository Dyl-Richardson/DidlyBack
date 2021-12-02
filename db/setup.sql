CREATE TABLE 'events'(
    'id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    'event_name' VARCHAR(255) NOT NULL,
    'event_author' VARCHAR(255) NOT NULL,
    'event_description' VARCHAR(255) NOT NULL
);

CREATE TABLE 'dates_by_event'(
    'id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    'event_id' INT NOT NULL,
    'event_date' DATE NOT NULL
);

CREATE TABLE 'attendees_by_date'(
    'id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    'date_id' INT NOT NULL,
    'attendee' VARCHAR(255) NOT NULL,
    'available' TINYINT(1) NOT NULL
);
INSERT INTO events (event_name, event_author, event_description)
VALUES ('Test sql', 'Dylan', 'Test sql query');

INSERT INTO dates_by_event (event_id, event_date)
VALUES (1, '2021-12-01'), (1, '2021-12-02'), (1, '2021-12-03');

INSERT INTO attendees_by_date (date_id, attendee, available)
VALUES (1, 'Bob Bobby', 1), (1, 'Marc Pol', 1), (1, 'Jean Jan', 1),
        (2, 'Bob Bobby', 1), (2, 'Marc Pol', 0), (2, 'Jean Jan', 1),
        (3, 'Bob Bobby', 0), (3, 'Marc Pol', 1), (3, 'Jean Jan', 0);