const router = require('express').Router();
const { projectsController } = require('../controllers');

router.get('/allProjects', projectsController.getAllProjects);
router.get('/project/:projectId', projectsController.getSingleProject);
router.get('/project/:projectId/commits', projectsController.getProjectCommits);

module.exports = router;
