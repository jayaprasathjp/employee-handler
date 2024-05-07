const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.get("/", async (req, res) => {
  try {
    const employee = await prisma.employee.findMany({});
    return res.json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
