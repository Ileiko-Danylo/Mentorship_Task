const router = require('express').Router();
const { projectsController } = require('../controllers');

router.get('/allProjects', projectsController.getAllProjects);
router.get('/project/:projectId', projectsController.getSingleProject);
router.get('/project/:projectId/commits', projectsController.getProjectCommits);
// router.get(
//   '/project/:projectId/commits/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})/:author_email?',
//   projectsController.getProjectCommitsWithFilter
// );

module.exports = router;
