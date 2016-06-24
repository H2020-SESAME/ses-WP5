{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "",
  "type": "object",
  "properties": {
    "release": {
      "id": "/vnfd/release",
      "type": "string"
    },
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
	"created_at": {
      "id": "/vnfd/created_at",
      "type": "string"
    },
    "modified_at": {
      "id": "/vnfd/modified_at",
      "type": "string"
    },
	"manifest_file_md5": {
          "id": "/vnfd/manifest_file_md5",
          "type": "string"
        },
    "type": {
      "id": "/vnfd/type",
      "type": "string"
    },
    "description": {
      "id": "/vnfd/description",
      "type": "string"
    },
    "vdu": {
      "id": "/vnfd/vdu",
      "type": "array",
      "items": {
        "id": "/vnfd/vdu/1",
        "type": "object",
        "properties": {
          "resource_requirements": {
            "id": "/vnfd/vdu/1/resource_requirements",
            "type": "object",
            "properties": {
              "network_interface_bandwidth_unit": {
                "id": "/vnfd/vdu/1/resource_requirements/network_interface_bandwidth_unit",
                "type": "string"
              },
              "hypervisor_parameters": {
                "id": "/vnfd/vdu/1/resource_requirements/hypervisor_parameters",
                "type": "object",
                "properties": {
                  "version": {
                    "id": "/vnfd/vdu/1/resource_requirements/hypervisor_parameters/version",
                    "type": "string"
                  },
                  "type": {
                    "id": "/vnfd/vdu/1/resource_requirements/hypervisor_parameters/type",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              },
              "memory_unit": {
                "id": "/vnfd/vdu/1/resource_requirements/memory_unit",
                "type": "string"
              },
              "network_interface_card_capabilities": {
                "id": "/vnfd/vdu/1/resource_requirements/network_interface_card_capabilities",
                "type": "object",
                "properties": {
                  "SR-IOV": {
                    "id": "/vnfd/vdu/1/resource_requirements/network_interface_card_capabilities/SR-IOV",
                    "type": "boolean"
                  },
                  "mirroring": {
                    "id": "/vnfd/vdu/1/resource_requirements/network_interface_card_capabilities/mirroring",
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "storage": {
                "id": "/vnfd/vdu/1/resource_requirements/storage",
                "type": "object",
                "properties": {
                  "size_unit": {
                    "id": "/vnfd/vdu/1/resource_requirements/storage/size_unit",
                    "type": "string"
                  },
                  "persistence": {
                    "id": "/vnfd/vdu/1/resource_requirements/storage/persistence",
                    "type": "boolean"
                  },
                  "size": {
                    "id": "/vnfd/vdu/1/resource_requirements/storage/size",
                    "type": "integer"
                  }
                },
                "additionalProperties": false
              },
              "network_interface_bandwidth": {
                "id": "/vnfd/vdu/1/resource_requirements/network_interface_bandwidth",
                "type": "string"
              },
              "platform_pcie_parameters": {
                "id": "/vnfd/vdu/1/resource_requirements/platform_pcie_parameters",
                "type": "object",
                "properties": {
                  "SR-IOV": {
                    "id": "/vnfd/vdu/1/resource_requirements/platform_pcie_parameters/SR-IOV",
                    "type": "boolean"
                  },
                  "device_pass_through": {
                    "id": "/vnfd/vdu/1/resource_requirements/platform_pcie_parameters/device_pass_through",
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "vcpus": {
                "id": "/vnfd/vdu/1/resource_requirements/vcpus",
                "type": "integer"
              },
              "vswitch_capabilities": {
                "id": "/vnfd/vdu/1/resource_requirements/vswitch_capabilities",
                "type": "object",
                "properties": {
                  "version": {
                    "id": "/vnfd/vdu/1/resource_requirements/vswitch_capabilities/version",
                    "type": "string"
                  },
                  "type": {
                    "id": "/vnfd/vdu/1/resource_requirements/vswitch_capabilities/type",
                    "type": "string"
                  },
                  "overlay_tunnel": {
                    "id": "/vnfd/vdu/1/resource_requirements/vswitch_capabilities/overlay_tunnel",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              },
              "data_processing_acceleration_library": {
                "id": "/vnfd/vdu/1/resource_requirements/data_processing_acceleration_library",
                "type": "string"
              },
              "memory": {
                "id": "/vnfd/vdu/1/resource_requirements/memory",
                "type": "integer"
              },
              "memory_parameters": {
                "id": "/vnfd/vdu/1/resource_requirements/memory_parameters",
                "type": "object",
                "properties": {
                  "large_pages_required": {
                    "id": "/vnfd/vdu/1/resource_requirements/memory_parameters/large_pages_required",
                    "type": "boolean"
                  },
                  "numa_allocation_policy": {
                    "id": "/vnfd/vdu/1/resource_requirements/memory_parameters/numa_allocation_policy",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              },
              "cpu_support_accelerator": {
                "id": "/vnfd/vdu/1/resource_requirements/cpu_support_accelerator",
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "bootstrap_script": {
            "id": "/vnfd/vdu/1/bootstrap_script",
            "type": "string"
          },
          "vm_image": {
            "id": "/vnfd/vdu/1/vm_image",
            "type": "string"
          },
          "vm_image_format": {
            "id": "/vnfd/vdu/1/vm_image_format",
            "type": "string"
          },
          "networking_resources": {
            "id": "/vnfd/vdu/1/networking_resources",
            "type": "string"
          },
          "monitoring_parameters_specific": {
            "id": "/vnfd/vdu/1/monitoring_parameters_specific",
            "type": "array",
            "items": {
              "id": "/vnfd/vdu/1/monitoring_parameters_specific/6",
              "type": "object",
              "properties": {
                "metric": {
                  "id": "/vnfd/vdu/1/monitoring_parameters_specific/6/metric",
                  "type": "string"
                },
                "desc": {
                  "id": "/vnfd/vdu/1/monitoring_parameters_specific/6/desc",
                  "type": "string"
                },
                "unit": {
                  "id": "/vnfd/vdu/1/monitoring_parameters_specific/6/unit",
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "id": {
            "id": "/vnfd/vdu/1/id",
            "type": "string"
          },
          "alias": {
            "id": "/vnfd/vdu/1/alias",
            "type": "string"
          },
          "controller": {
            "id": "/vnfd/vdu/1/controller",
            "type": "boolean"
          },
          "connection_points": {
            "id": "/vnfd/vdu/1/connection_points",
            "type": "array",
            "items": {
              "id": "/vnfd/vdu/1/connection_points/2",
              "type": "object",
              "properties": {
                "vlink_ref": {
                  "id": "/vnfd/vdu/1/connection_points/2/vlink_ref",
                  "type": "string"
                },
                "id": {
                  "id": "/vnfd/vdu/1/connection_points/2/id",
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "monitoring_parameters": {
            "id": "/vnfd/vdu/1/monitoring_parameters",
            "type": "array",
            "items": {
              "id": "/vnfd/vdu/1/monitoring_parameters/8",
              "type": "object",
              "properties": {
                "metric": {
                  "id": "/vnfd/vdu/1/monitoring_parameters/8/metric",
                  "type": "string"
                },
                "unit": {
                  "id": "/vnfd/vdu/1/monitoring_parameters/8/unit",
                  "type": "string"
                },
                "desc": {
                  "id": "/vnfd/vdu/1/monitoring_parameters/8/desc",
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "vm_image_md5": {
            "id": "/vnfd/vdu/1/vm_image_md5",
            "type": "string"
          },
          "scale_in_out": {
            "id": "/vnfd/vdu/1/scale_in_out",
            "type": "object",
            "properties": {
              "minimum": {
                "id": "/vnfd/vdu/1scale_in_out/minimum",
                "type": "integer"
              },
              "maximum": {
                "id": "/vnfd/vdu/1/scale_in_out/maximum",
                "type": "integer"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    },
    
    "virtual_links": {
      "id": "/vnfd/virtual_links",
      "type": "array",
      "items": {
        "id": "/vnfd/virtual_links/3",
        "type": "object",
        "properties": {
          "leaf_requirement": {
            "id": "/vnfd/virtual_links/3/leaf_requirement",
            "type": "string"
          },
          "connectivity_type": {
            "id": "/vnfd/virtual_links/3/connectivity_type",
            "type": "string"
          },
          "vdu_reference": {
            "id": "/vnfd/virtual_links/3/vdu_reference",
            "type": "array",
            "items": {
              "id": "/vnfd/virtual_links/3/vdu_reference/0",
              "type": "string"
            }
          },
          "external_access": {
            "id": "/vnfd/virtual_links/3/external_access",
            "type": "boolean"
          },
          "connection_points_reference": {
            "id": "/vnfd/virtual_links/3/connection_points_reference",
            "type": "array",
            "items": {
              "id": "/vnfd/virtual_links/3/connection_points_reference/1",
              "type": "string"
            }
          },
          "net_segment": {
            "id": "/vnfd/virtual_links/3/net_segment",
            "type": "string"
          },
          "access": {
            "id": "/vnfd/virtual_links/3/access",
            "type": "boolean"
          },
          "alias": {
            "id": "/vnfd/virtual_links/3/alias",
            "type": "string"
          },
          "root_requirement": {
            "id": "/vnfd/virtual_links/3/root_requirement",
            "type": "string"
          },
          "dhcp": {
            "id": "/vnfd/virtual_links/3/dhcp",
            "type": "boolean"
          },
          "id": {
            "id": "/vnfd/virtual_links/3/id",
            "type": "string"
          },
          "qos": {
            "id": "/vnfd/virtual_links/3/qos",
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    },
    "deployment_flavours": {
      "id": "/vnfd/deployment_flavours",
      "type": "array",
      "items": {
        "id": "/vnfd/deployment_flavours/1",
        "type": "object",
        "properties": {
          "vdu_reference": {
            "id": "/vnfd/deployment_flavours/1/vdu_reference",
            "type": "array",
            "items": {
              "id": "/vnfd/deployment_flavours/1/vdu_reference/0",
              "type": "string"
            }
          },
          "constraint": {
            "id": "/vnfd/deployment_flavours/1/constraint",
            "type": "string"
          },
          "flavour_key": {
            "id": "/vnfd/deployment_flavours/1/flavour_key",
            "type": "string"
          },
          "vlink_reference": {
            "id": "/vnfd/deployment_flavours/1/vlink_reference",
            "type": "array",
            "items": {
              "id": "/vnfd/deployment_flavours/1/vlink_reference/1",
              "type": "string"
            }
          },
          "id": {
            "id": "/vnfd/deployment_flavours/1/id",
            "type": "string"
          },
          "assurance_parameters": {
            "id": "/vnfd/deployment_flavours/1/assurance_parameters",
            "type": "array",
            "items": {
              "id": "/vnfd/deployment_flavours/1/assurance_parameters/0",
              "type": "object",
              "properties": {
                "violation": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/violation",
                  "type": "array",
                  "items": {
                    "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/violation/0",
                    "type": "object",
                    "properties": {
                      "interval": {
                        "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/violation/0/interval",
                        "type": "integer"
                      },
                      "breaches_count": {
                        "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/violation/0/breaches_count",
                        "type": "integer"
                      }
                    },
                    "additionalProperties": false
                  }
                },
                "value": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/value",
                  "type": "integer"
                },
                "penalty": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/penalty",
                  "type": "object",
                  "properties": {
                    "type": {
                      "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/penalty/type",
                      "type": "string"
                    },
                    "expression": {
                      "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/penalty/expression",
                      "type": "integer"
                    },
                    "validity": {
                      "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/penalty/validity",
                      "type": "string"
                    },
                    "unit": {
                      "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/penalty/unit",
                      "type": "string"
                    }
                  },
                  "additionalProperties": false
                },
                "formula": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/formula",
                  "type": "string"
                },
                "rel_id": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/rel_id",
                  "type": "string"
                },
                "id": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/id",
                  "type": "string"
                },
                "unit": {
                  "id": "/vnfd/deployment_flavours/1/assurance_parameters/0/unit",
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          }
        },
        "additionalProperties": false
      }
    },
   
    "vnf_lifecycle_events": {
      "id": "/vnfd/vnf_lifecycle_events",
      "type": "array",
      "items": {
        "id": "/vnfd/vnf_lifecycle_events/1",
        "type": "object",
        "properties": {
          "authentication_username": {
            "id": "/vnfd/vnf_lifecycle_events/1/authentication_username",
            "type": "string"
          },
          "driver": {
            "id": "/vnfd/vnf_lifecycle_events/1/driver",
            "type": "string"
          },
          "authentication_type": {
            "id": "/vnfd/vnf_lifecycle_events/1/authentication_type",
            "type": "string"
          },
          "authentication": {
            "id": "/vnfd/vnf_lifecycle_events/1/authentication",
            "type": "string"
          },
          "authentication_port": {
            "id": "/vnfd/vnf_lifecycle_events/1/authentication_port",
            "type": "integer"
          },
          "vnf_container": {
            "id": "/vnfd/vnf_lifecycle_events/1/vnf_container",
            "type": "string"
          },
          "events": {
            "id": "/vnfd/vnf_lifecycle_events/1/events",
            "type": "object",
            "properties": {
              "start": {
                "id": "/vnfd/vnf_lifecycle_events/1/events/start",
                "type": "object",
                "properties": {
                  "command": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/start/command",
                    "type": "string"
                  },
                  "template_file": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/start/template_file",
                    "type": "string"
                  },
                  "template_file_format": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/start/template_file_format",
                    "type": "string"
                  }
                },
                "required": [
                  "command",
                  "template_file",
                  "template_file_format"
                ],
                "additionalProperties": false
              },
              "stop": {
                "id": "/vnfd/vnf_lifecycle_events/1/events/stop",
                "type": "object",
                "properties": {
                  "command": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/stop/command",
                    "type": "string"
                  },
                  "template_file": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/stop/template_file",
                    "type": "string"
                  },
                  "template_file_format": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/stop/template_file_format",
                    "type": "string"
                  }
                },
                "required": [
                  "command",
                  "template_file",
                  "template_file_format"
                ],
                "additionalProperties": false
              },
              "restart": {
                "id": "/vnfd/vnf_lifecycle_events/1/events/restart",
                "type": "object",
                "properties": {
                  "command": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/restart/command",
                    "type": "string"
                  },
                  "template_file": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/restart/template_file",
                    "type": "string"
                  },
                  "template_file_format": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/restart/template_file_format",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              },
              "scale-in": {
                "id": "/vnfd/vnf_lifecycle_events/1/events/scale-in",
                "type": "object",
                "properties": {
                  "command": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-in/command",
                    "type": "string"
                  },
                  "template_file": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-in/template_file",
                    "type": "string"
                  },
                  "template_file_format": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-in/template_file_format",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              },
              "scale-out": {
                "id": "/vnfd/vnf_lifecycle_events/1/events/scale-out",
                "type": "object",
                "properties": {
                  "command": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-out/command",
                    "type": "string"
                  },
                  "template_file": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-out/template_file",
                    "type": "string"
                  },
                  "template_file_format": {
                    "id": "/vnfd/vnf_lifecycle_events/1/events/scale-out/template_file_format",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              }
            },
            "required": [
              "start",
              "stop"
            ],
            "additionalProperties": false
          },
          "flavor_id_ref": {
            "id": "/vnfd/vnf_lifecycle_events/1/flavor_id_ref",
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    }
        
  },
  "additionalProperties": false
}