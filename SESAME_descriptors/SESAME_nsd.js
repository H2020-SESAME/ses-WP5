{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "",
  "type": "object",
  "properties": {
    "nsd": {
      "id": "/nsd",
      "type": "object",
      "properties": {
        "id": {
          "id": "/nsd/id",
          "type": "string"
        },
        "name": {
          "id": "/nsd/name",
          "type": "string"
        },
        "vendor": {
          "id": "/nsd/vendor",
          "type": "string"
        },
        "version": {
          "id": "/nsd/version",
          "type": "string"
        },
        "manifest_file_md5": {
          "id": "/nsd/manifest_file_md5",
          "type": "string"
        },
        "vnfds": {
          "id": "/nsd/vnfds",
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1,
          "uniqueItems": true
        },
        "vnffgd": {
          "id": "/nsd/vnffgd",
          "type": "object",
          "properties": {
            "id": {
              "id": "/nsd/vnffgd/id",
              "type": "string"
            },
            "vendor": {
              "id": "/nsd/vnffgd/vendor",
              "type": "string"
            },
            "version": {
              "id": "/nsd/vnffgd/version",
              "type": "string"
            },
            "ns_version": {
              "id": "/nsd/vnffgd/ns_version",
              "type": "string"
            },
            "manifest_file_md5": {
              "id": "/nsd/vnffgd/manifest_file_md5",
              "type": "string"
            },
            "vnffgs": {
              "id": "/nsd/vnffgd/vnffgs",
              "type": "array",
              "items": {
                "id": "/nsd/vnffgd/vnffgs/0",
                "type": "object",
                "properties": {
                  "vnffg_id": {
                    "id": "/nsd/vnffgd/vnffgs/0/vnffg_id",
                    "type": "string"
                  },
                  "number_of_endpoints": {
                    "id": "/nsd/vnffgd/vnffgs/0/number_of_endpoints",
                    "type": "integer"
                  },
                  "number_of_virtual_links": {
                    "id": "/nsd/vnffgd/vnffgs/0/number_of_virtual_links",
                    "type": "integer"
                  },
                  "depedent_virtual_links": {
                    "id": "/nsd/vnffgd/vnffgs/0/depedent_virtual_links",
                    "type": "array",
                    "items": [
                      {
                        "id": "/nsd/vnffgd/vnffgs/0/depedent_virtual_links/0",
                        "type": "string"
                      },
                      {
                        "id": "/nsd/vnffgd/vnffgs/0/depedent_virtual_links/1",
                        "type": "string"
                      },
                      {
                        "id": "/nsd/vnffgd/vnffgs/0/depedent_virtual_links/2",
                        "type": "string"
                      }
                    ]
                  },
                  "network_forwarding_path": {
                    "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path",
                    "type": "array",
                    "items": {
                      "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0",
                      "type": "object",
                      "properties": {
                        "nfp_id": {
                          "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0/nfp_id",
                          "type": "string"
                        },
                        "graph": {
                          "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0/graph",
                          "type": "array"
                        },
                        "connection_points": {
                          "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0/connection_points",
                          "type": "array"
                        },
                        "constituent_vnfs": {
                          "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0/constituent_vnfs",
                          "type": "array",
                          "items": {
                            "id": "/nsd/vnffgd/vnffgs/0/network_forwarding_path/0/constituent_vnfs/0",
                            "type": "Object"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "lifecycle_events": {
          "id": "/nsd/lifecycle_events",
          "type": "object",
          "properties": {
            "start": {
              "id": "/nsd/lifecycle_events/start",
              "type": "array",
              "items": {
                "id": "/nsd/lifecycle_events/start/0",
                "type": "object",
                "properties": {
                  "vnf_id": {
                    "id": "/nsd/lifecycle_events/start/0/vnf_id",
                    "type": "string"
                  },
                  "vnf_event": {
                    "id": "/nsd/lifecycle_events/start/0/vnf_event",
                    "type": "string"
                  }
                }
              }
            },
            "stop": {
              "id": "/nsd/lifecycle_events/stop",
              "type": "array",
              "items": {
                "id": "/nsd/lifecycle_events/stop/0",
                "type": "object",
                "properties": {
                  "vnf_id": {
                    "id": "/nsd/lifecycle_events/stop/0/vnf_id",
                    "type": "string"
                  },
                  "vnf_event": {
                    "id": "/nsd/lifecycle_events/stop/0/vnf_event",
                    "type": "string"
                  }
                }
              }
            },
            "scale_out": {
              "id": "/nsd/lifecycle_events/scale_out",
              "type": "array",
              "items": {
                "id": "/nsd/lifecycle_events/scale_out/0",
                "type": "object",
                "properties": {
                  "vnf_id": {
                    "id": "/nsd/lifecycle_events/scale_out/0/vnf_id",
                    "type": "string"
                  },
                  "vnf_event": {
                    "id": "/nsd/lifecycle_events/scale_out/0/vnf_event",
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "vnf_depedency": {
          "id": "/nsd/vnf_depedency",
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 0,
          "uniqueItems": true
        },
        "monitoring_parameters": {
          "id": "/nsd/monitoring_parameters",
          "type": "array",
          "items": {
            "type": "object"
          },
          "minItems": 0
        },
        "vld": {
          "id": "/nsd/vld",
          "type": "object",
          "properties": {
            "id": {
              "id": "/nsd/vld/id",
              "type": "string"
            },
            "vendor": {
              "id": "/nsd/vld/vendor",
              "type": "string"
            },
            "descriptor_version": {
              "id": "/nsd/vld/descriptor_version",
              "type": "string"
            },
            "manifest_file_md5": {
              "id": "/nsd/vld/manifest_file_md5",
              "type": "string"
            },
            "number_of_endpoints": {
              "id": "/nsd/vld/number_of_endpoints",
              "type": "integer"
            },
            "virtual_links": {
              "id": "/nsd/vld/virtual_links",
              "type": "array",
              "items":
              {
                "id": "/nsd/vld/virtual_links/0",
                "type": "object",
                "properties": {
                  "vld_id": {
                    "id": "/nsd/vld/virtual_links/0/vld_id",
                    "type": "string"
                  },
                  "root_requirements": {
                    "id": "/nsd/vld/virtual_links/0/root_requirements",
                    "type": "string"
                  },
                  "leaf_requirements": {
                    "id": "/nsd/vld/virtual_links/0/leaf_requirements",
                    "type": "string"
                  },
                  "qos": {
                    "id": "/nsd/vld/virtual_links/0/qos",
                    "type": "object",
                    "properties": {
                      "none": {
                        "id": "/nsd/vld/virtual_links/0/qos/none",
                        "type": "string"
                      }
                    }
                  },
                  "test_access": {
                    "id": "/nsd/vld/virtual_links/0/test_access",
                    "type": "string"
                  },
                  "connections": {
                    "id": "/nsd/vld/virtual_links/0/connections",
                    "type": "array",
                    "minItems": 1
                  },
                  "connectivity_type": {
                    "id": "/nsd/vld/virtual_links/0/connectivity_type",
                    "type": "string"
                  }
                }
              },
              "minItems": 1
            }
          }
        },
        "service_deployment_flavours": {
          "id": "/nsd/service_deployment_flavours",
          "type": "array",
          "items": {
            "id": "/nsd/service_deployment_flavours/0",
            "type": "object",
            "properties": {
              "id": {
                "id": "/nsd/service_deployment_flavours/0/id",
                "type": "string"
              },
              "flavor_key": {
                "id": "/nsd/service_deployment_flavours/0/flavor_key",
                "type": "string"
              },
              "constituent_vnf": {
                "id": "/nsd/service_deployment_flavours/0/constituent_vnf",
                "type": "array",
                "items": {
                  "id": "/nsd/service_deployment_flavours/0/constituent_vnf/0",
                  "type": "object",
                  "properties": {
                    "number_of_instances": {
                      "id": "/nsd/service_deployment_flavours/0/constituent_vnf/0/number_of_instances",
                      "type": "integer"
                    },
                    "redundancy_model": {
                      "id": "/nsd/service_deployment_flavours/0/constituent_vnf/0/redundancy_model",
                      "type": "string"
                    },
                    "vnf_flavour_id_reference": {
                      "id": "/nsd/service_deployment_flavours/0/constituent_vnf/0/vnf_flavour_id_reference",
                      "type": "string"
                    },
                    "vnf_reference": {
                      "id": "/nsd/service_deployment_flavours/0/constituent_vnf/0/vnf_reference",
                      "type": "string"
                    }
                  }
                },
				"minItems": 1
              }
            }
          },
          "minItems": 1
        },
        "auto_scale_policy": {
          "id": "/nsd/auto_scale_policy",
          "type": "object",
          "properties": {
            "criteria": {
              "id": "/nsd/auto_scale_policy/criteria",
              "type": "array"
            },
            "action": {
              "id": "/nsd/auto_scale_policy/action",
              "type": "string"
            }
          }
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
		"pnfds": {
          "id": "/nsd/pnfds",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "id",
        "name",
        "version",
        "vnfds",
        "vnffgd",
        "lifecycle_events",
        "monitoring_parameters",
        "vld",
        "auto_scale_policy"
      ]
    }
  },
  "required": [
    "nsd"
  ]
}