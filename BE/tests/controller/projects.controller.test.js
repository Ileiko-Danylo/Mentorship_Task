const { projectsController } = require('../../src/controllers/index');
const axios = require('axios').default;

const mockedProjects = [
  {
    id: 39329290,
    description: 'My awesome project',
    name: 'project-with-pipeline-1-d73b8611ad860a3d',
    name_with_namespace:
      'gitlab-qa-sandbox-group-2 / qa-test-2022-09-12-09-26-15-e3a697b735a29c5f / project-with-pipeline-1-d73b8611ad860a3d',
    path: 'project-with-pipeline-1-d73b8611ad860a3d',
    path_with_namespace:
      'gitlab-qa-sandbox-group-2/qa-test-2022-09-12-09-26-15-e3a697b735a29c5f/project-with-pipeline-1-d73b8611ad860a3d',
    created_at: '2022-09-12T09:35:15.110Z',
    default_branch: 'main',
    tag_list: [],
    topics: [],
  },
];

const mockedCommits = [
  {
    id: 'd93465e033e8cc1787e915ebc63f61c9b6af5c4c',
    short_id: 'd93465e0',
    created_at: '2021-01-25T17:53:25.000+00:00',
    parent_ids: ['7d4b21f5bca70112eff6c003e52410104d4484be'],
    title: 'Update .gitlab-ci.yml',
    message: 'Update .gitlab-ci.yml',
    author_name: 'Thao Tester1',
    author_email: 'jacn40@yahoo.com',
    authored_date: '2021-01-25T17:53:25.000+00:00',
    committer_name: 'Thao Tester1',
    committer_email: 'jacn40@yahoo.com',
    committed_date: '2021-01-25T17:53:25.000+00:00',
  },
];

describe('Projects controller', () => {
  describe('get All Projects', () => {
    it('should return false if data doesnt fetched or res.send doesnt called with response.data ', async () => {
      const res = { send: jest.fn() };
      jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedProjects });
      const allProjects = await projectsController.getAllProjects(null, res);

      expect(axios.get).toHaveBeenCalledWith('https://gitlab.com/api/v4/projects');
      expect(allProjects).toEqual(mockedProjects);
      expect(res.send).toHaveBeenCalledWith(mockedProjects);
    });
  });

  describe('get Single Project', () => {
    it('should return false if data doesnt fetched or res.send doesnt called with response.data ', async () => {
      const res = { send: jest.fn() };
      const req = {
        params: {
          projectId: 'projectId',
        },
      };

      jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedProjects });
      const singleProject = await projectsController.getSingleProject(req, res);

      expect(singleProject).toEqual(mockedProjects);
      expect(res.send).toHaveBeenCalledWith(mockedProjects);
      expect(axios.get).toHaveBeenCalledWith(
        `https://gitlab.com/api/v4/projects/${req.params.projectId}`
      );
    });
  });
  describe('get project commits', () => {
    it('should return false if data doesnt fetched or res.send doesnt called with response.data ', async () => {
      const res = { send: jest.fn() };
      const req = {
        params: {
          projectId: 'projectId',
        },
      };

      jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedCommits });
      const projectCommits = await projectsController.getProjectCommits(req, res);

      expect(projectCommits).toEqual(mockedCommits);
      expect(res.send).toHaveBeenCalledWith(mockedCommits);
      expect(axios.get).toHaveBeenCalledWith(
        `https://gitlab.com/api/v4/projects/${req.params.projectId}/repository/commits`
      );
    });
  });
});
