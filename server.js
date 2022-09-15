// ################################################################################################

// Express-Template - A simple node.js express template
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
import dotevn from 'dotenv';
import express from 'express';
import path from 'path';

// My Imports
import timeStamp from './lib/time_stamp.mjs';

// ################################################################################################

// Routes
import routeIndex from './routes/get_index.mjs';
import routeHashes from './routes/all_hashes.mjs';
//import routeVideoCapture from './routes/video_capture.mjs';

// ################################################################################################

// dotEnv
dotevn.config();

// ################################################################################################

// Starting
console.log(`${timeStamp()} - Server Starting`);
const __dirname = path.resolve();

// ################################################################################################

// Express
const app = express();
app.enable('trust proxy');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'pug');

// ################################################################################################

// HTTP requests all
app.all('*', (req, res, next) => {
  console.log(`${timeStamp()} - Received HTTP ${req.method} request for '${req.path}'`);
  next();
});

// HTTP request for index page
app.get(process.env.ROUTE_INDEX, routeIndex);

// HTTP request for hashes page
app.all(process.env.ROUTE_HASHES, routeHashes);

// HTTP request for video capture page
// app.all(process.env.ROUTE_VIDEO_CAPTURE, routeVideoCapture);
app.all(process.env.ROUTE_VIDEO_CAPTURE, (req, res) => {
    res.sendfile('/public/video-capture.html' , { root : __dirname});
});

// ################################################################################################

// Listen for HTTP requests
app.listen(process.env.PORT, () => {
  console.log(`${timeStamp()} - HTTP server started and listening to port ${process.env.PORT}`);
});

// ################################################################################################
