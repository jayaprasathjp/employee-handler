const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10); 
    if (!id) {
        return res.status(400).json({ error: 'Invalid ID provided' });
    }
    try {
        await prisma.employee.delete({
            where: { id: id }
        });
        const remainingEmployees = await prisma.employee.findMany({});
        res.json(remainingEmployees);
    } catch (error) {
        console.error("Error handling request:", error);
        if (error.code === 'P2025') { 
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

module.exports = router;
