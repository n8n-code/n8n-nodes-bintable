import type { INodeProperties } from 'n8n-workflow';

export const lookupDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lookup"
					]
				}
			},
			"options": [
				{
					"name": "Bin Lookup",
					"value": "Bin Lookup",
					"action": "Lookup for bin",
					"description": "By passing in the appropriate BIN, you can lookup for\ncard meta data in bintable.com API\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"bin\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{bin}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lookup"
					],
					"operation": [
						"Bin Lookup"
					]
				}
			}
		},
		{
			"displayName": "Bin",
			"name": "bin",
			"required": true,
			"description": "pass the required BIN code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Lookup"
					],
					"operation": [
						"Bin Lookup"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "The API key, which you can get from bintable.com website.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lookup"
					],
					"operation": [
						"Bin Lookup"
					]
				}
			}
		},
];
