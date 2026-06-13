import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class BintableApi implements ICredentialType {
        name = 'N8nDevBintableApi';

        displayName = 'Bintable API';

        icon: Icon = { light: 'file:../nodes/Bintable/bintable.svg', dark: 'file:../nodes/Bintable/bintable.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.bintable.com/v1',
                        required: true,
                        placeholder: 'https://api.bintable.com/v1',
                        description: 'The base URL of your Bintable API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
