(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.TokensApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Tokens service.
   * @module purecloud-platform-client-v2/api/TokensApi
   * @version 19.0.2
   */

  /**
   * Constructs a new TokensApi.
   * @alias module:purecloud-platform-client-v2/api/TokensApi
   * @class
   * @param {module:../ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:../ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete  auth token used to make the request.
     *
     */
    this.deleteTokensMe = function() {


      return this.apiClient.callApi(
        '/api/v2/tokens/me',
        'DELETE',
        {  },
        {  },
        {  },
        {  },
        null,
        ['PureCloud Auth'],
        ['application/json'],
        ['application/json']
      );
    };


    /**
     * Fetch information about the current token
     *
     */
    this.getTokensMe = function() {


      return this.apiClient.callApi(
        '/api/v2/tokens/me',
        'GET',
        {  },
        {  },
        {  },
        {  },
        null,
        ['PureCloud Auth'],
        ['application/json'],
        ['application/json']
      );
    };
  };

  return exports;
}));