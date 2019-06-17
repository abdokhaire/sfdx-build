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

## Install as plugin

1. Install the SFDX CLI. [Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
2. Install plugin: `sfdx plugins:install sfdx-build`

You'll be prompted that this, like any plugin, is not officially code-signed by Salesforce. you can [whitelist it] (https://developer.salesforce.com/blogs/2017/10/salesforce-dx-cli-plugin-update.html)

For CI/CD pipeline or whitelisting didn't work well for you: `echo 'y' | sfdx plugins:install sfdx-build -f`

## Install from source
1.Prepare Your Computer for Salesforce CLI Plug-In Development. [Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins_generate_prepare.htm)
2. Clone the repository: `git clone git@github.com:abdokhaire/sfdx-build.git`
3. Navigate to the project directory: `cd sfdx-build`
4. Install npm modules: npm install: `npm install`
5. Link the plugin: `sfdx plugins:link`
6. [Debugging your plugin](#debugging-your-plugin)

<!-- installstop -->

# Commands

<!-- commands -->
* [`sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-buildfetchxml--f--c-string--q-string--x--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfatal)

## `sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

generate a package xml form the specified org using metadata API

```
USAGE
  $ sfdx build:fetch:xml [-f] [-c <string>] [-q <string>] [-x] [-v <string>] [-u <string>] [--apiversion <string>] 
  [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  -c, --config=config                                     path to config file
  -f, --force                                             force boolean flag
  -q, --quickfilter=quickfilter                           csv separated list of metadata type, member or file names to filter on
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

# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `sfdx build:fetch:xml` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx build:fetch:xml -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run build:fetch:xml -f -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
