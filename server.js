// ################################################################################################

// My-Tools - A simple node.js express server with useful tools
// I've built and used for myself over time.
// Copyright (C) 2022  Daniel Bates

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// ################################################################################################

// Imports
import cookieParser from 'cookie-parser';
import express from 'express';

// ################################################################################################

// Routes
import routeIndex from './routes/index.js';
import routeAgeOfThings from './routes/age_of_things.js';
import routeAspectRatioCalculator from './routes/aspect_ratio_calculator.js';
import routeBlankPage from './routes/blank_page.js';
import routeHashes from './routes/hashes.js';
import routeVideoCapture from './routes/video_capture.js';

// GitHub Webhook route
import routeGitHubWebhook from './routes/github_webhook.js';

// ################################################################################################

// Starting
console.log('Server Starting');

// ################################################################################################

// Express
const app = express();
app.enable('trust proxy');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'pug');
const port = process.env.PORT || 3000;

// ################################################################################################

// HTTP requests all
app.all('*', (req, res, next) => {
  console.log(`Received HTTP ${req.method} request for '${req.path}'`);
  next();
});

// HTTP request for index page
app.get('/', routeIndex);

// HTTP request for age of things page
app.all('/age-of-things', routeAgeOfThings);

// HTTP request for aspect ratio calculator page
app.all('/aspect-ratio-calculator', routeAspectRatioCalculator);

// HTTP request for blank page
app.all('/blank-page', routeBlankPage);

// HTTP request for hashes page
app.all('/hashes', routeHashes);

// HTTP request for video capture page
app.all('/video-capture', routeVideoCapture);

// ################################################################################################

// HTTP request for GitHub Webhook (for auto-pull)
app.post('/github-webhook', routeGitHubWebhook);

// ################################################################################################

// Listen for HTTP requests
app.listen(port, () => {
  console.log(`HTTP server started and listening to port ${port}`);
});

// ################################################################################################
