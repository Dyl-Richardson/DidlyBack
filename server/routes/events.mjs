import { Router } from "express";
import { events } from "../../index.mjs";

const router = Router()

router.get('/events', (req, res) => {
    res.send(events)
})

router.post("/events", (req, res) => {
    res.send()
})
export default router