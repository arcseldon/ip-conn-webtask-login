# ip-conn-webtask-login

An automated login solution based on white-listed CIDR addresses that match to specific Connections.

Brought to you by [Auth0](https://auth0.com) in conjunction with [webtask](https://webtask.io/) technology, powered by [wt-cli](https://www.npmjs.com/package/wt-cli)

### Purpose

Auth0 currently supports **home realm discovery** based on the email address:

For example, a user logging in with john@fabrikamcorp.com might be redirected automatically to fabrikam-adfs.

This service offers the same feature, only using the ip address of the user requesting login.

Based on the IP address of the user we can automatically redirect that user to the right connection, securely logging
in the user without explicit need to select any connection.

Of course, if the service cannot match the IP to a registered connection name then the login page is presented as normal.

### Set up

Pre-requisites:

A working copy of node and npm installed. See [Node website](https://nodejs.org/en/) for instructions.
Install the latest version you can - this webtask was written using Node v5+ and NPM 3+ but should
work on earlier versions..

Install [wt-cli](https://www.npmjs.com/package/wt-cli):

Run:

```
wt init
```

Check the instructions at [webtask.io](https://webtask.io/) for further details if required on getting started with
the wt command line tooling.

Clone the repo:

```
git clone ip-conn-webtask-login
```

Next install NPM modules:

```
npm install
```

Build the project

```
npm run build
```

Simply opt into this service, by dropping a little custom JavaScript into your custom login page, provide one or more CIDR to conenction name entries, and the rest of the setup is plug and play.

Please reference `src/template/login.tpl` and `src/template/login.js` for examples of both html and js needed.

You need to replace the variable value for `webtaskUrl` at the top of `src/template/login.js` with YOUR webtask URL as provided by `wt-cli`

This will become clear once you have read the instructions for [ip-conn-webtask](https://github.com/arcseldon/ip-conn-webtask)

Essentially, your html page should include the following javascript dependencies:

script src="https://cdn.auth0.com/js/lock-8.2.js"<br/>
script src="https://cdn.auth0.com/w2/auth0-6.js"<br/>
script src="https://code.jquery.com/jquery-2.2.0.min.js"<br/>
script src="https://cdnjs.cloudflare.com/ajax/libs/q.js/1.4.1/q.min.js"<br/>

And you can drop the contents of `src/template/login.js` into your custom login page.

You can build the `src/template/login.tpl` and `src/template/login.js` files into a single deliverable by running:

```
npm run build
```

Output file: `build/login.html` with both combined into one deliverable.

Within the Auth0 website management area, you should have something like this:

![login page](https://raw.githubusercontent.com/arcseldon/ip-conn-webtask-login/master/img/customLogin.jpg)

Now, determine which CIDR ranges you need to match against which connection names.

Lets suppose you have this setup:

 Fabrikam => 83.29.4.2/16 => Connection: fabrikam-adfs<br/>
 Contoso => 99.2.4.28/32 => Connection: contoso-ping<br/>
 Microsoft => 44.2.4.3/16 => Connection: ms-azuread<br/>

 All you need to do is provide:

 83.29.4.2/16, fabrikam-adfs<br/>
 99.2.4.28/32,contoso-ping<br/>
 44.2.4.3/16, ms-azuread<br/>


You are now ready to use our [ip-conn-webtask](https://github.com/arcseldon/ip-conn-webtask) or [ip-conn-webtask-firebase](https://github.com/arcseldon/ip-conn-webtask-firebase) services to automate the registration and deployment process. Please see the README in one of those projects for details.

Your local Auth0 representative will be happy to assist at any point.

For specfic development questions or discovered bugs, please contact *Richard Seldon* at *arcseldon@icloud.com*
and feel free to raise an issue on the Auth0 github repository for this project. All our code is freely available
as open source.

