const axios = require('axios').default;

module.exports = {
  getAllProjects: (req, res) => {
    return axios.get('https://gitlab.com/api/v4/projects').then((response) => {
      res.send(response.data);
      return response.data;
    });
  },

  getSingleProject: (req, res) => {
    const projectId = req.params.projectId;

    return axios.get(`https://gitlab.com/api/v4/projects/${projectId}`).then((response) => {
      res.send(response.data);
      return response.data;
    });
  },
};
