const { Router } = require("express");
const router = Router();

router.use("/addemployee", require("./addEmployee.js"));
router.use("/profileimage", require("./profileimage.js"));
router.use("/viewemployee", require("./viewEmployee.js"));
router.use("/search", require("./search.js"));
router.use("/delete", require("./delete.js"));
router.use("/editemployee", require("./editEmployee.js"));
router.use("/transfer", require("./transfer.js"));


module.exports = router;