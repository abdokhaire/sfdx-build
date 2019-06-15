import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { BuildConfig, Packagexml } from '../../../util';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('sfdx-build', 'xml');

export default class Xml extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
    `$ sfdx build:fetch:xml --targetusername myOrg@example.com
    <?xml version="1.0" encoding="UTF-8"?>
    <Package xmlns="http://soap.sforce.com/2006/04/metadata">...</Package>
    `
  ];

  public static args = [{ name: 'file' }];

  protected static flagsConfig = {
    force: flags.boolean({ char: 'f', description: messages.getMessage('forceFlagDescription') }),
    config: flags.string({ char: 'c', description: messages.getMessage('configFlagDescription') }),
    quickfilter: flags.string({ char: 'q', description: messages.getMessage('quickfilterFlagDescription') }),
    excludemanaged: flags.boolean({ char: 'x', description: messages.getMessage('excludeManagedFlagDescription') })
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;
  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = true;
  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    // this.org is guaranteed because requiresUsername=true, as opposed to supportsUsername
    const conn = this.org.getConnection();
    const configs: BuildConfig = new BuildConfig(this.flags.config, this.flags);
    const packageXML: Packagexml = new Packagexml(conn, configs);
    const result = await packageXML.build('xml');

    // Organization will always return one result, but this is an example of throwing an error
    // The output and --json will automatically be handled for you.

    /*
    if ( isEmpty(result) ) {
      throw new SfdxError(messages.getMessage('errorNoOrgResults', [this.org.getOrgId()]));
    }
    */

    console.log(result);
    this.ux.log(result.toString());
    return { result: result.toString() };
  }
}
