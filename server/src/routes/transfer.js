const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
    const {id,department,position,salary}=req.body;
    console.log(req.body);
  try {
    const Employee = await prisma.employee.update({
        where:{id:parseInt(id)},
      data: { 
        department,
        position,
        salary: String(salary), 
      }
    });
    return res.json({ status: "success" });
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
