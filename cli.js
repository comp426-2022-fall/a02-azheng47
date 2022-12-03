#!/usr/bin/env node

import minimist from 'minimist';
import fetch from 'node-fetch';
import moment from 'moment-timezone';

const minimist = minimist(process.argv.slice(2));

if (argv.h) {
	console.log(`Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
	    -h            Show this help message and exit.
	    -n, -s        Latitude: N positive; S negative.
	    -e, -w        Longitude: E positive; W negative.
	    -z            Time zone: uses tz.guess() from moment-timezone by default.
	    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
	    -j            Echo pretty JSON from open-meteo API and exit.`);
	process.exit(0);
}

const timezone = args.v || moment.tz.guess();
let latitude = args.n || -args.s;
let longitude = args.e || -args.w;

const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=' + timezone);
const data = await response.json();

