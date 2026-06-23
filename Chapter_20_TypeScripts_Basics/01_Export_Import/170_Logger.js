// if we use default in the export <logger.js> file  then no need use curly braces {}
//while importing

// if we don't use default in the export <testutils.js> file  then we need use curly braces {}
//while importing

import log from '../logger.js';
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testutils.js";

log("starting the test cases");
console.log(formatUpperCaseString("login"));