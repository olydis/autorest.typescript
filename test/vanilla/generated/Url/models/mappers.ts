/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const AutoRestUrlTestServiceOptions = {
  required: false,
  type: {
    name: 'Composite',
    className: 'AutoRestUrlTestServiceOptions',
    modelProperties: {
      globalStringQuery: {
        required: false,
        serializedName: 'globalStringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const QueriesGetBooleanNullOptionalParams = {
  required: false,
  serializedName: 'GetBooleanNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesGetBooleanNullOptionalParams',
    modelProperties: {
      boolQuery: {
        required: false,
        serializedName: 'boolQuery',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const QueriesGetIntNullOptionalParams = {
  required: false,
  serializedName: 'GetIntNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesGetIntNullOptionalParams',
    modelProperties: {
      intQuery: {
        required: false,
        serializedName: 'intQuery',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const QueriesGetLongNullOptionalParams = {
  required: false,
  serializedName: 'GetLongNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesGetLongNullOptionalParams',
    modelProperties: {
      longQuery: {
        required: false,
        serializedName: 'longQuery',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const QueriesFloatNullOptionalParams = {
  required: false,
  serializedName: 'FloatNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesFloatNullOptionalParams',
    modelProperties: {
      floatQuery: {
        required: false,
        serializedName: 'floatQuery',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const QueriesDoubleNullOptionalParams = {
  required: false,
  serializedName: 'DoubleNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesDoubleNullOptionalParams',
    modelProperties: {
      doubleQuery: {
        required: false,
        serializedName: 'doubleQuery',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const QueriesStringNullOptionalParams = {
  required: false,
  serializedName: 'StringNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesStringNullOptionalParams',
    modelProperties: {
      stringQuery: {
        required: false,
        serializedName: 'stringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const QueriesEnumValidOptionalParams = {
  required: false,
  serializedName: 'EnumValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesEnumValidOptionalParams',
    modelProperties: {
      enumQuery: {
        required: false,
        serializedName: 'enumQuery',
        type: {
          name: 'Enum',
          allowedValues: [ 'red color', 'green color', 'blue color' ]
        }
      }
    }
  }
};

export const QueriesEnumNullOptionalParams = {
  required: false,
  serializedName: 'EnumNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesEnumNullOptionalParams',
    modelProperties: {
      enumQuery: {
        required: false,
        serializedName: 'enumQuery',
        type: {
          name: 'Enum',
          allowedValues: [ 'red color', 'green color', 'blue color' ]
        }
      }
    }
  }
};

export const QueriesByteMultiByteOptionalParams = {
  required: false,
  serializedName: 'ByteMultiByteOptions',
  type: {
    name: 'Composite',
    className: 'QueriesByteMultiByteOptionalParams',
    modelProperties: {
      byteQuery: {
        required: false,
        serializedName: 'byteQuery',
        type: {
          name: 'ByteArray'
        }
      }
    }
  }
};

export const QueriesByteNullOptionalParams = {
  required: false,
  serializedName: 'ByteNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesByteNullOptionalParams',
    modelProperties: {
      byteQuery: {
        required: false,
        serializedName: 'byteQuery',
        type: {
          name: 'ByteArray'
        }
      }
    }
  }
};

export const QueriesDateNullOptionalParams = {
  required: false,
  serializedName: 'DateNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesDateNullOptionalParams',
    modelProperties: {
      dateQuery: {
        required: false,
        serializedName: 'dateQuery',
        type: {
          name: 'Date'
        }
      }
    }
  }
};

export const QueriesDateTimeNullOptionalParams = {
  required: false,
  serializedName: 'DateTimeNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesDateTimeNullOptionalParams',
    modelProperties: {
      dateTimeQuery: {
        required: false,
        serializedName: 'dateTimeQuery',
        type: {
          name: 'DateTime'
        }
      }
    }
  }
};

export const QueriesArrayStringCsvValidOptionalParams = {
  required: false,
  serializedName: 'ArrayStringCsvValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringCsvValidOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringCsvNullOptionalParams = {
  required: false,
  serializedName: 'ArrayStringCsvNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringCsvNullOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringCsvEmptyOptionalParams = {
  required: false,
  serializedName: 'ArrayStringCsvEmptyOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringCsvEmptyOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringSsvValidOptionalParams = {
  required: false,
  serializedName: 'ArrayStringSsvValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringSsvValidOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringTsvValidOptionalParams = {
  required: false,
  serializedName: 'ArrayStringTsvValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringTsvValidOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringPipesValidOptionalParams = {
  required: false,
  serializedName: 'ArrayStringPipesValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringPipesValidOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const PathItemsGetAllWithValuesOptionalParams = {
  required: false,
  serializedName: 'GetAllWithValuesOptions',
  type: {
    name: 'Composite',
    className: 'PathItemsGetAllWithValuesOptionalParams',
    modelProperties: {
      localStringQuery: {
        required: false,
        serializedName: 'localStringQuery',
        type: {
          name: 'String'
        }
      },
      pathItemStringQuery: {
        required: false,
        serializedName: 'pathItemStringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const PathItemsGetGlobalQueryNullOptionalParams = {
  required: false,
  serializedName: 'GetGlobalQueryNullOptions',
  type: {
    name: 'Composite',
    className: 'PathItemsGetGlobalQueryNullOptionalParams',
    modelProperties: {
      localStringQuery: {
        required: false,
        serializedName: 'localStringQuery',
        type: {
          name: 'String'
        }
      },
      pathItemStringQuery: {
        required: false,
        serializedName: 'pathItemStringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const PathItemsGetGlobalAndLocalQueryNullOptionalParams = {
  required: false,
  serializedName: 'GetGlobalAndLocalQueryNullOptions',
  type: {
    name: 'Composite',
    className: 'PathItemsGetGlobalAndLocalQueryNullOptionalParams',
    modelProperties: {
      localStringQuery: {
        required: false,
        serializedName: 'localStringQuery',
        type: {
          name: 'String'
        }
      },
      pathItemStringQuery: {
        required: false,
        serializedName: 'pathItemStringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const PathItemsGetLocalPathItemQueryNullOptionalParams = {
  required: false,
  serializedName: 'GetLocalPathItemQueryNullOptions',
  type: {
    name: 'Composite',
    className: 'PathItemsGetLocalPathItemQueryNullOptionalParams',
    modelProperties: {
      localStringQuery: {
        required: false,
        serializedName: 'localStringQuery',
        type: {
          name: 'String'
        }
      },
      pathItemStringQuery: {
        required: false,
        serializedName: 'pathItemStringQuery',
        type: {
          name: 'String'
        }
      }
    }
  }
};
