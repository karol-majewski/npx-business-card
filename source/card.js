#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
};
// Text + chalk definitions
const data = {
    name: chalk_1.default.white('Chris Wilcox'),
    work: chalk_1.default.white('Senior Engineer working on Cloud Client Libraries at Google'),
    twitter: chalk_1.default.cyan('https://twitter.com/chriswilcox47'),
    github: chalk_1.default.cyan('https://github.com/crwilcox'),
    linkedin: chalk_1.default.cyan('https://www.linkedin.com/in/chrisrwilcox'),
    web: chalk_1.default.cyan('https://chriswilcox.codes'),
    npx: chalk_1.default.white('npx chriswilcox'),
    labelWork: chalk_1.default.white.bold('      Work:'),
    labelTwitter: chalk_1.default.white.bold('   Twitter:'),
    labelGitHub: chalk_1.default.white.bold('    GitHub:'),
    labelLinkedIn: chalk_1.default.white.bold('  LinkedIn:'),
    labelWeb: chalk_1.default.white.bold('       Web:'),
    labelCard: chalk_1.default.white.bold('      Card:')
};
// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;
// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;
console.log(chalk_1.default.green(boxen_1.default(output, options)));
