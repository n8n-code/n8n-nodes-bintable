import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { lookupDescription } from './resources/lookup';
import { balanceDescription } from './resources/balance';

export class Bintable implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Bintable',
                name: 'N8nDevBintable',
                icon: { light: 'file:./bintable.svg', dark: 'file:./bintable.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Free BIN lookup API from bintable.com for card info via BIN, using community and third-party updated databases.',
                defaults: { name: 'Bintable' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevBintableApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Lookup",
					"value": "Lookup",
					"description": "Authorized users with API Key can call this service"
				},
				{
					"name": "Balance",
					"value": "Balance",
					"description": "Authorized users with API Key can call endpoints under this tag."
				}
			],
			"default": ""
		},
		...lookupDescription,
		...balanceDescription
                ],
        };
}
