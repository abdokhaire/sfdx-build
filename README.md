# sfdx-build
==========

sfdx plugin for creating a package.xml

[![Version](https://img.shields.io/npm/v/sfdx-build.svg)](https://npmjs.org/package/sfdx-build)
[![CircleCI](https://circleci.com/gh/abdokhaire/sfdx-build/tree/master.svg?style=svg)](https://circleci.com/gh/abdokhaire/sfdx-build/tree/master)
[![Build status](https://ci.appveyor.com/api/projects/status/k3if0g2pe0c0hpw7/branch/master?svg=true)](https://ci.appveyor.com/project/abdokhaire/sfdx-build/branch/master)
[![Known Vulnerabilities](https://snyk.io/test/github/abdokhaire/sfdx-build/badge.svg)](https://snyk.io/test/github/abdokhaire/sfdx-build)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-build.svg)](https://npmjs.org/package/sfdx-build)
[![License](https://img.shields.io/npm/l/sfdx-build.svg)](https://github.com/abdokhaire/sfdx-build/blob/master/package.json)

<!-- [![Codecov](https://codecov.io/gh/abdokhaire/sfdx-build/branch/master/graph/badge.svg)](https://codecov.io/gh/abdokhaire/sfdx-build)  
[![Greenkeeper](https://badges.greenkeeper.io/abdokhaire/sfdx-build.svg)](https://greenkeeper.io/) -->

<!-- toc -->
<!-- tocstop -->

<!-- install -->
# Usage

## Install from source

1. Install the SDFX CLI.
2. Clone the repository: `git clone git@github.com:abdokhaire/sfdx-build.git`
3. Install npm modules: `npm i sfdx-build`
4. Link the plugin: `sfdx plugins:link .`

## Install as plugin

1. Install plugin: `sfdx plugins:install sfdx-build`

You'll be prompted that this, like any plugin, is not officially code-signed by Salesforce. you can [whitelist it](https://developer.salesforce.com/blogs/2017/10/salesforce-dx-cli-plugin-update.html)

For CI/CD pipeline or whitelisting didn't work well for you: `echo 'y' | sfdx plugins:install sfdx-build -f`

<!-- installstop -->

# Commands

<!-- commands -->
* [`sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-buildfetchxml--f--c-string--q-string--x--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

generate a package xml form the specified org using metadata API

```
USAGE
  $ sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] 
  [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -c, --config=config                                     path to config file
  -f, --force                                             force boolean flag
  -q, --quickfilter=quickfilter                           csv separated list of metadata type,
                                                          member or file names to filter on
  -u, --targetusername=targetusername                     username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername         username or alias for the dev hub org; overrides default dev hub org
  -x, --excludemanaged                                    exclude managed packages from output
  --apiversion=apiversion                                 override the api version used for api requests made by this command
  --json                                                  format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)          [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx build:fetch:xml -u myOrg@example.com
       <?xml version="1.0" encoding="UTF-8"?>
       <Package xmlns="http://soap.sforce.com/2006/04/metadata">...</Package>
```

_See code: [src/commands/build/fetch/xml.ts](https://github.com/abdokhaire/sfdx-build/blob/v0.0.3/src/commands/build/fetch/xml.ts)_
<!-- commandsstop -->
