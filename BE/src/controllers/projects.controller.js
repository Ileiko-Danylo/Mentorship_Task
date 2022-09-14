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
  getProjectCommits: (req, res) => {
    const projectId = req.params.projectId;

    return axios
      .get(`https://gitlab.com/api/v4/projects/${projectId}/repository/commits`)
      .then((response) => {
        res.send(response.data);
        return response.data;
      });
  },
  // getProjectCommitsWithFilter: (req, res) => {
  //   const projectId = req.params.projectId;
  //   const authorEmail = req.params.author_email;

  //   const queryDate = new Date(+req.params.year, +req.params.month - 1, +req.params.day + 1);
  //   let data;

  //   console.log(queryDate);

  //   return axios
  //     .get(`https://gitlab.com/api/v4/projects/${projectId}/repository/commits/`)
  //     .then((response) => {
  //       if (!queryDate) {
  //         data = response.data.filter((project) => project.author_email === authorEmail);
  //       } else {
  //         data = response.data.filter(
  //           (project) =>
  //             project.author_email === authorEmail &&
  //             project.committed_date.toISOString().split('T')[0] === queryDate
  //         );
  //       }

  //       res.send(data);
  //       return data;
  //     });
  // },
};
