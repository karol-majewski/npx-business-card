#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';

const options: boxen.Options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('Karol Majewski'),
  work: chalk.white('Software Engineer at Unsplash'),
  twitter: chalk.cyan('https://twitter.com/karoljmajewski'),
  github: chalk.cyan('https://github.com/karol-majewski'),
  stackOverflow: chalk.cyan('https://stackoverflow.com/users/10325032'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/karol-majewski'),
  npx: chalk.white('npx karol-majewski'),
  labelWork: chalk.white.bold('         Work:'),
  labelTwitter: chalk.white.bold('      Twitter:'),
  labelGitHub: chalk.white.bold('       GitHub:'),
  labelStackOverflow: chalk.white.bold('StackOverflow:'),
  labelLinkedIn: chalk.white.bold('     LinkedIn:'),
  labelCard: chalk.white.bold('         Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const stackOverflowing = `${data.labelStackOverflow}  ${data.stackOverflow}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + stackOverflowing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
