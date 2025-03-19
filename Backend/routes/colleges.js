import {Router} from "express"

const router = Router();

// GET route
router.get("/colleges", (req, res) => {
    res.send("Retrieve all colleges");
});

router.get("/college/:id",(req,res)=>{
    res.send()
})

// POST route
router.post("/college", (req, res) => {
    res.send("Add a new college");
});

// DELETE route
router.delete("/college/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Delete college with ID: ${id}`);
});

// UPDATE route
router.put("/collge/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Update college with ID: ${id}`);
});

export default router;router