{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "",
  "type": "object",
  "properties": {
	"id": {
      "id": "/vnfd/id",
      "type": "integer"
    },
	"vendor": {
      "id": "/vnfd/vendor",
      "type": "string"
    },
	"descriptor_version": {
      "id": "/vnfd/descriptor_version",
      "type": "string"
    },
	 "version": {
      "id": "/vnfd/version",
      "type": "string"
    },
	"name": {
      "id": "/vnfd/name",
      "type": "string"
    },
	"manifest_file_md5": {
          "id": "/vnfd/manifest_file_md5",
          "type": "string"
        },
    "description": {
      "id": "/vnfd/description",
      "type": "string"
    },
    "connection_points": {
          "id": "/nsd/connection_points",
          "type": "array",		  
          "items": {
            "id": "/nsd/service_deployment_flavours/0",
            "type": "object",
            "properties": {
              "id": {
                "id": "/nsd/service_deployment_flavours/0/id",
                "type": "string"
              },
              "type": {
                "id": "/nsd/service_deployment_flavours/0/flavor_key",
                "type": "string"
              }
			}
		  }
		},
  "additionalProperties": false
  }
}