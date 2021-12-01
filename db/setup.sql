CREATE TABLE `event`(
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `event_name` VARCHAR(255) NOT NULL,
    `event_author` VARCHAR(255) NOT NULL,
    `event_description` VARCHAR(255) NOT NULL
);

CREATE TABLE `event_date`(
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `event_dates` DATE NOT NULL,
    `event_id` INT NOT NULL
);

CREATE TABLE `event_attendees`(
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `date_id` INT NOT NULL,
    `attendee` VARCHAR(255) NOT NULL,
    `available` TINYINT NOT NULL
);

INSERT INTO event (event_name, event_author, event_description)
VALUES ('Test sql', 'Dylan', 'Test sql query');

INSERT INTO event_date (event_id, event_dates)
VALUES (1, '2021-12-01'), (1, '2021-12-02'), (1, '2021-12-03');

INSERT INTO event_attendees (date_id, attendee, available)
VALUES (1, 'Bob Bobby', 1), (1, 'Marc Pol', 1), (1, 'Jean Jan', 1),
        (2, 'Bob Bobby', 1), (2, 'Marc Pol', 0), (2, 'Jean Jan', 1),
        (3, 'Bob Bobby', 0), (3, 'Marc Pol', 1), (3, 'Jean Jan', 0);