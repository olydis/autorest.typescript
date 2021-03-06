/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";

const packageName = "";
const packageVersion = "";

class AutoRestRequiredOptionalTestService extends msRest.ServiceClient {
  requiredGlobalPath: string;
  requiredGlobalQuery: string;
  optionalGlobalQuery?: number;
  baseUri: string;

  // Operation groups
  implicit: operations.Implicit;
  explicit: operations.Explicit;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestRequiredOptionalTestService class.
   * @constructor
   *
   * @param {string} requiredGlobalPath - number of items to skip
   *
   * @param {string} requiredGlobalQuery - number of items to skip
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {number} [options.optionalGlobalQuery] - number of items to skip
   *
   */
  constructor(requiredGlobalPath: string, requiredGlobalQuery: string, baseUri?: string, options?: Models.AutoRestRequiredOptionalTestServiceOptions) {
    if (requiredGlobalPath === null || requiredGlobalPath === undefined) {
      throw new Error('\'requiredGlobalPath\' cannot be null.');
    }
    if (requiredGlobalQuery === null || requiredGlobalQuery === undefined) {
      throw new Error('\'requiredGlobalQuery\' cannot be null.');
    }

    if (!options) options = {};

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.requiredGlobalPath = requiredGlobalPath;
    this.requiredGlobalQuery = requiredGlobalQuery;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.optionalGlobalQuery !== null && options.optionalGlobalQuery !== undefined) {
      this.optionalGlobalQuery = options.optionalGlobalQuery;
    }
    this.implicit = new operations.Implicit(this);
    this.explicit = new operations.Explicit(this);
    this.serializer = new msRest.Serializer(Mappers, false);
  }
}

export { AutoRestRequiredOptionalTestService, Models as AutoRestRequiredOptionalTestServiceModels, Mappers as AutoRestRequiredOptionalTestServiceMappers };
