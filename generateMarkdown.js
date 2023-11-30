// TODO: Create a function that returns a license badge based on which license is passed in
const generateMarkdownFunction = ({ title, motivation, buildReason, problemSolved, learnt, installation, usage, credits, license }) => {
  const sections = ['Description', 'Installation', 'Usage', 'Credits', 'License'];
  const tableOfContents = sections.map(section => `* [${section}](#${section.toLowerCase()})`).join('\n');
  const aggregatedDescription = `${motivation}\n\n${buildReason}\n\n${problemSolved}\n\n${learnt}`;
  const licenseBadge = renderLicenseBadge(license);
  // const licenseSection = renderLicenseSection(license);
  // console.log('Generated License Badge:', licenseBadge);
  // console.log('Generated License Link:', renderLicenseLink(license));
  return `# ${title}
${licenseBadge}
## Table of Contents
${tableOfContents}
## Description
${aggregatedDescription}
## Installation
${installation || 'Installation instructions not provided'}
## Usage
${usage || 'Usage information not provided'}
## Credits
${credits || 'Credits not provided'}
${renderLicenseSection(license)}`;
};
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GNU v3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    'BSD 2-Clause': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'Creative Commons 1.0': 'https://img.shields.io/badge/License-CC0%201.0-green.svg',
    'Eclipse 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg'
  };
  const badgeURL = licenseBadges[license];
  return badgeURL ? `[License](${badgeURL})` : '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU v3.0': 'https://www.gnu.org/licenses/gpl-3.0.html',
    'BSD 2-Clause': 'https://opensource.org/license/bsd-2-clause/',
    'BSD 3-Clause': 'https://opensource.org/license/bsd-3-clause/',
    'Boost 1.0': 'https://opensource.org/license/bsl-1-0/',
    'Creative Commons 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Eclipse 2.0': 'https://www.eclipse.org/legal/epl-2.0/'
  }
  const licenseURL = licenseLinks[license];
  return licenseURL ? `[License](${licenseURL})` : '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `## License\n${renderLicenseBadge(license)}\n${renderLicenseLink(license)}\n` : '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents ${data.tableOfContents ? data.tableOfContents : 'Table of Contents not provided'}
  ## Description ${data.description}
  ## Installation ${data.installation ? data.installation : 'Installation instructions not provided'}
  ## Usage ${data.usage ? data.usage : 'Usage information not provided'}
  ## Credits ${data.credits ? data.credits : 'Credits not provided'}
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdownFunction;