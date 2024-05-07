const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/image/:filename", (req, res) => {
    const filePath = path.join(__dirname, 'image', req.params.filename);
    console.log(filePath);
    res.sendFile(filePath);
});
module.exports=router;