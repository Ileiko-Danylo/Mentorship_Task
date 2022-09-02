const router = require('express').Router();
const { projectsController } = require('../controllers');

router.get('/allProjects', projectsController.getAllProjects);
router.get('/singleProject/:projectId', projectsController.getSingleProject);

module.exports = router;
