import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.get('/api', (req:express.Request, res:express.Response) => {
    const {slackName, slackTrack} = req.query;
    const currentDay = new Date().toLocaleString('en-US', {weekday: 'long'});
    const currentTime = new Date().toISOString();
    const gitHubFileUrl = 'https://github.com/boluwatife010/Hackerank-solutions/blob/main/dayOfProgrammer.js';
    const gitHubRepoUrl = 'https://github.com/boluwatife010/Hackerank-solutions';
    const responseData = {
        "slack_name": slackName,
        "current_day": currentDay,
        "utc_time": currentTime,
        "track": slackTrack,
        "github_file_url": gitHubFileUrl,
        "github_repo_url": gitHubRepoUrl,
        "status_code": 200
    }
    return res.status(200).send(responseData);
})
app.listen(8082, () => {
    console.log('server is listening on port 8082.');
})