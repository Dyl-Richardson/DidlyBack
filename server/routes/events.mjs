import { Router } from "express";
import { events } from "../../index.mjs";

const router = Router()

// Event list
router.get('/events', (req, res) => {
    res.status(200).send(events)
})

// Find event with id
router.get('/events/:id', (req, res) => {
    let event = events.find(c => c.id === parseInt(req.params.id))
    if (!event) res.status(404).send("There's not an event with that id")
    res.send(event)
})

// Create event
router.post("/events", (req, res) => {
    const event = {
        id: events.length + 1,
        event_name: req.body.event_name,
        event_author: req.body.event_author,
        event_description: req.body.event_description,
        dates: [{
            id: dates.length + 1,
            date: req.body.date,
            attendee: []
        }]
    }
    events.push(event)
    res.send(event)
})

export default router