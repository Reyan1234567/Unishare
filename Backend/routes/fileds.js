import { Router } from "express";
import Field from "../models/fields.js";
import College from "../models/college.js"
const router = Router();

router.post("/fields", async (req, res) => {
    const {body}=req
    if(!body.name||!body.fieldCode||!body.college){
        return res.status(500).send("All fields are required")
    }
    const college=College.findOne(body.college)
    if(!college){
        res.status(500).send("Can't find college")
    }
    try {
        const field = new Field(req.body);
        await field.save();
        res.status(201).json(field);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/fields", async (req, res) => {
    try {
        const fields = await Field.find();
        res.status(200).json(fields);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("fields/:id", async (req, res) => {
    try {
        const field = await Field.findById(req.params.id);
        if (!field) {
            return res.status(404).json({ error: "Field not found" });
        }
        res.status(200).json(field);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("fields/:id", async (req, res) => {
    try {
        const field = await Field.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!field) {
            return res.status(404).json({ error: "Field not found" });
        }
        res.status(200).json(field);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("fields/:id", async (req, res) => {
    try {
        const field = await Field.findByIdAndDelete(req.params.id);
        if (!field) {
            return res.status(404).json({ error: "Field not found" });
        }
        res.status(200).json({ message: "Field deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;