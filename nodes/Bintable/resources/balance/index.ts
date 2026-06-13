import type { INodeProperties } from 'n8n-workflow';

export const balanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Balance"
					]
				}
			},
			"options": [
				{
					"name": "Balance Lookup",
					"value": "Balance Lookup",
					"action": "Check Balance",
					"description": "Get Account balance and expiry",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance"
					],
					"operation": [
						"Balance Lookup"
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
						"Balance"
					],
					"operation": [
						"Balance Lookup"
					]
				}
			}
		},
];
