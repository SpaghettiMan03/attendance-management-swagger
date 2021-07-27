// source: employee.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.employee.Date', null, global);
goog.exportSymbol('proto.employee.Employee', null, global);
goog.exportSymbol('proto.employee.Employee.Gender', null, global);
goog.exportSymbol('proto.employee.Employee.Position', null, global);
goog.exportSymbol('proto.employee.ListRequest', null, global);
goog.exportSymbol('proto.employee.ListResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employee.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employee.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.employee.Date.displayName = 'proto.employee.Date';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employee.Employee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employee.Employee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.employee.Employee.displayName = 'proto.employee.Employee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employee.ListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employee.ListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.employee.ListRequest.displayName = 'proto.employee.ListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employee.ListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.employee.ListResponse.repeatedFields_, null);
};
goog.inherits(proto.employee.ListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.employee.ListResponse.displayName = 'proto.employee.ListResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employee.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.employee.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employee.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.Date.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    day: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employee.Date}
 */
proto.employee.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employee.Date;
  return proto.employee.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employee.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employee.Date}
 */
proto.employee.Date.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employee.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employee.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employee.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.Date.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.employee.Date.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.employee.Date} returns this
 */
proto.employee.Date.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.employee.Date.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.employee.Date} returns this
 */
proto.employee.Date.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 day = 3;
 * @return {number}
 */
proto.employee.Date.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.employee.Date} returns this
 */
proto.employee.Date.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employee.Employee.prototype.toObject = function(opt_includeInstance) {
  return proto.employee.Employee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employee.Employee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.Employee.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    birthday: (f = msg.getBirthday()) && proto.employee.Date.toObject(includeInstance, f),
    gender: jspb.Message.getFieldWithDefault(msg, 4, 0),
    position: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employee.Employee}
 */
proto.employee.Employee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employee.Employee;
  return proto.employee.Employee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employee.Employee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employee.Employee}
 */
proto.employee.Employee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 3:
      var value = new proto.employee.Date;
      reader.readMessage(value,proto.employee.Date.deserializeBinaryFromReader);
      msg.setBirthday(value);
      break;
    case 4:
      var value = /** @type {!proto.employee.Employee.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 5:
      var value = /** @type {!proto.employee.Employee.Position} */ (reader.readEnum());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employee.Employee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employee.Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employee.Employee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.Employee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBirthday();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.employee.Date.serializeBinaryToWriter
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.employee.Employee.Gender = {
  MALE: 0,
  FEMALE: 1,
  NEITHER: 2,
  NOT_ANSWER: 3
};

/**
 * @enum {number}
 */
proto.employee.Employee.Position = {
  FULL_TIME: 0,
  PART_TIME: 1
};

/**
 * optional string lastName = 1;
 * @return {string}
 */
proto.employee.Employee.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.employee.Employee} returns this
 */
proto.employee.Employee.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string firstName = 2;
 * @return {string}
 */
proto.employee.Employee.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.employee.Employee} returns this
 */
proto.employee.Employee.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Date birthday = 3;
 * @return {?proto.employee.Date}
 */
proto.employee.Employee.prototype.getBirthday = function() {
  return /** @type{?proto.employee.Date} */ (
    jspb.Message.getWrapperField(this, proto.employee.Date, 3));
};


/**
 * @param {?proto.employee.Date|undefined} value
 * @return {!proto.employee.Employee} returns this
*/
proto.employee.Employee.prototype.setBirthday = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.employee.Employee} returns this
 */
proto.employee.Employee.prototype.clearBirthday = function() {
  return this.setBirthday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.employee.Employee.prototype.hasBirthday = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Gender gender = 4;
 * @return {!proto.employee.Employee.Gender}
 */
proto.employee.Employee.prototype.getGender = function() {
  return /** @type {!proto.employee.Employee.Gender} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.employee.Employee.Gender} value
 * @return {!proto.employee.Employee} returns this
 */
proto.employee.Employee.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Position position = 5;
 * @return {!proto.employee.Employee.Position}
 */
proto.employee.Employee.prototype.getPosition = function() {
  return /** @type {!proto.employee.Employee.Position} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.employee.Employee.Position} value
 * @return {!proto.employee.Employee} returns this
 */
proto.employee.Employee.prototype.setPosition = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employee.ListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.employee.ListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employee.ListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.ListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employee.ListRequest}
 */
proto.employee.ListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employee.ListRequest;
  return proto.employee.ListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employee.ListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employee.ListRequest}
 */
proto.employee.ListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employee.ListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employee.ListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employee.ListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.ListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.employee.ListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employee.ListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.employee.ListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employee.ListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.ListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeesList: jspb.Message.toObjectList(msg.getEmployeesList(),
    proto.employee.Employee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employee.ListResponse}
 */
proto.employee.ListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employee.ListResponse;
  return proto.employee.ListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employee.ListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employee.ListResponse}
 */
proto.employee.ListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.employee.Employee;
      reader.readMessage(value,proto.employee.Employee.deserializeBinaryFromReader);
      msg.addEmployees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employee.ListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employee.ListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employee.ListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.ListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.employee.Employee.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Employee employees = 1;
 * @return {!Array<!proto.employee.Employee>}
 */
proto.employee.ListResponse.prototype.getEmployeesList = function() {
  return /** @type{!Array<!proto.employee.Employee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.employee.Employee, 1));
};


/**
 * @param {!Array<!proto.employee.Employee>} value
 * @return {!proto.employee.ListResponse} returns this
*/
proto.employee.ListResponse.prototype.setEmployeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.employee.Employee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.employee.Employee}
 */
proto.employee.ListResponse.prototype.addEmployees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.employee.Employee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.employee.ListResponse} returns this
 */
proto.employee.ListResponse.prototype.clearEmployeesList = function() {
  return this.setEmployeesList([]);
};


goog.object.extend(exports, proto.employee);
