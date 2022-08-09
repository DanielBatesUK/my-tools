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

// My Imports
import timeStamp from './lib/time_stamp.mjs';

// ################################################################################################

// Routes
import routeIndex from './routes/get_index.mjs';

// ################################################################################################

// dotEnv
dotevn.config();

// ################################################################################################

// Starting
console.log(`${timeStamp()} - Server Starting`);

// ################################################################################################

// Express
const app = express();
app.enable('trust proxy');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
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

// ################################################################################################

// Listen for HTTP requests
app.listen(process.env.PORT, () => {
  console.log(`${timeStamp()} - HTTP server started and listening to port ${process.env.PORT}`);
});

// ################################################################################################
