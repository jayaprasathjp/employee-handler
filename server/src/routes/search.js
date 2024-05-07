const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
    const {term}=req.body;
    let numericTerm = parseInt(term, 10);
let idCondition = !isNaN(numericTerm) ? { id: numericTerm } : undefined;

  try {
    const employees = await prisma.employee.findMany({
        where: {
            OR: [
                ...(idCondition ? [idCondition] : []), // Spread and conditionally include ID search
                { name: { contains: term } },
                { department: { contains: term } },
                { position: { contains: term } }
            ]
        }
    });
    return res.json(employees);
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
