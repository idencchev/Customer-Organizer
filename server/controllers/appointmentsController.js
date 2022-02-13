const router = require('express').Router();


router.post('/create', async (req, res) => {
    try {
       

      //  res.status(201).json({ message: `${approtment} has been created successfully.` });
    } catch (error) {
        return res.status(409).json({ error });
    }
});









module.exports = router;