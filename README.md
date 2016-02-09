# ip-conn-webtask-login

An automated login solution based on white-listed CIDR addresses that match to specific Connections.

Brought to you by [Auth0](https://auth0.com) in conjunction with [webtask](https://webtask.io/) technology, powered by [wt-cli](https://www.npmjs.com/package/wt-cli) 

### Purpose

Auth0 currently supports "home realm discovery" based on the email address:

For example, a user logging in with john@fabrikamcorp.com might be redirected automatically to fabrikam-adfs.

This service offers the same feature, only using the ip address of the user requesting login.

Based on the IP address of the user we can automatically redirect that user to the right connection, securely logging
in the user without explicit need to select any connection. 

Of course, if the service cannot match the IP to a registered connection name then the login page is presented as normal.

### Set up

Simply opt into this service, by dropping a little custom JavaScript into your custom login page, provide one or more CIDR to conenction name entries, and the rest of the setup is plug and play.

Please reference `lib/login.html` for an example login.html page containing the necessary JavaScript to place in your login page.

Now, determine which CIDR ranges you need to match against which connection names.

Lets suppose you have this setup:

 Fabrikam => 83.29.4.2/16 => Connection: fabrikam-adfs<br/>
 Contoso => 99.2.4.28/32 => Connection: contoso-ping<br/>
 Microsoft => 44.2.4.3/16 => Connection: ms-azuread<br/>
 
 All you need to do is provide:
 
 83.29.4.2/16, fabrikam-adfs<br/>
 99.2.4.28/32,contoso-ping<br/>
 44.2.4.3/16, ms-azuread<br/>
 
 Then run our tooling and you are done! For further instructions, read on.

### Next steps

You are now ready to use our [ip-conn-webtask](https://github.com/arcseldon/ip-conn-webtask) or [ip-conn-webtask-firebase](https://github.com/arcseldon/ip-conn-webtask) services to automate the registration and deployment
process. Please see the README in one of those projects for details.

Your local Auth0 representative will be happy to assist at any point.

For specfic development questions or discovered bugs, please contact *Richard Seldon* at *arcseldon@icloud.com*
and feel free to raise an issue on the Auth0 github repository for this project. All our code is freely available
as open source.

