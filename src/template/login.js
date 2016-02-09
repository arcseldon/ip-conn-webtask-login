(function () {

  // REPLACE THIS WITH YOUR WEBTASK URL as provided from wt-cli
  var webtaskUrl = 'https://webtask.it.auth0.com/api/run/wt-arcseldon-gmail_com-0/ipconn';

  // Decode utf8 characters properly
  var config = JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))));

  var getIpInfo = function () {
    'use strict';
    var deferred = Q.defer();
    var domain = config.auth0Domain;
    $.get('https://' + domain + '/user/ip', deferred.resolve).fail(deferred.reject);
    return deferred.promise;
  };

  var getConnInfo = function (ipInfo) {
    'use strict';
    var deferred = Q.defer();
    var ip = ipInfo && ipInfo.ip || '';
    // uncomment here, to test a failure to match with connection
    // ip = "127.0.0.1";
    $.get(webtaskUrl + '?ip=' + ip, deferred.resolve).fail(deferred.reject);
    return deferred.promise;
  };

  var getConnInfoErrorHandler = function (err) {
    'use strict';
    console.log(err);
    return {connection: 'unknown'};
  };

  var challengeLogin = function () {
    var connection = config.connection;
    var prompt = config.prompt;
    var initializationOptions = {
      assetsUrl: config.assetsUrl,
      cdn: config.cdn
    };

    var lock = new Auth0Lock(config.clientID, config.auth0Domain, initializationOptions);
    lock.show({
      // icon:            '{YOUR_LOGO_URL}',
      callbackURL: config.callbackURL,
      responseType: config.callbackOnLocationHash ? 'token' : 'code',
      dict: config.dict,
      connections: connection ? [connection] : null,
      rememberLastLogin: !prompt,
      container: 'widget-container',
      authParams: config.internalOptions
    });
  };

  var autoLogin = function () {
    'use strict';
    var auth0 = new Auth0({
      domain: config.auth0Domain,
      callbackURL: config.callbackURL,
      clientID: config.clientID,
      callbackOnLocationHash: config.callbackOnLocationHash
    });

    auth0.login({
      connection: connInfo.connection
    }, function (err) {
      if (err) {
        console.error('Error with login using given connection: ' + err.message);
      }
      challengeLogin();
    });
  };

  var validConnectionInfo = function (connInfo) {
    return connInfo && (connInfo.connection !== 'unknown');
  };

  var bodyScript = function (connInfo) {
    'use strict';
    if (validConnectionInfo(connInfo)) {
      autoLogin();
    } else {
      challengeLogin();
    }
  };

  // kick it off..
  getIpInfo()
    .then(getConnInfo, getConnInfoErrorHandler)
    .then(bodyScript)
    .done();

}());
