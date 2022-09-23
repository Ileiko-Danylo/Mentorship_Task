const router = require('express').Router();
const { projectsController } = require('../controllers');

router.get('/allProjects', projectsController.getAllProjects);
router.get('/:projectId', projectsController.getSingleProject);
router.get('/:projectId/commits', projectsController.getProjectCommits);
router.get('/:projectId/commits/:commitId', projectsController.getSingleCommit);
module.exports = router;
