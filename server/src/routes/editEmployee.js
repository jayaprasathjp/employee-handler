const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "src/routes/image/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
router.get("/:id", async (req, res) => {
    const {id}=req.params;

  try {
    const employee = await prisma.employee.findMany({
        where: { id: parseInt(id) }
    });
    return res.json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

  router.post("/", upload.single("image"), async (req, res) => {
    const {
        id,
      name,
      dob,
      department,
      position,
      address,
      email,
      phone,
      salary,
      city,
      state,
    } = req.body;
  console.log(req.body);
    if (
      !name ||
      !dob ||
      !department ||
      !position ||
      !address ||
      !email ||
      !phone ||
      !salary ||
      !city ||
      !state
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
  
    try {
      const fileName = req.file.originalname;
      const newEmployee = await prisma.employee.update({
        where:{id:parseInt(id)},
      data: {
        name,
        dob: new Date(dob), 
        department,
        position,
        address,
        email,
        phone,
        image:fileName,
        salary: String(salary), 
        city,
        state,
      }
    });
    
    return res.json({ status: "success" });
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
