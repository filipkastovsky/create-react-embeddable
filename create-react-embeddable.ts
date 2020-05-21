import { CommandBuilder } from 'yargs';
import { ncp } from 'ncp';
import { join } from 'path';

const _templatesPath = join(__dirname, 'templates');

export enum OptionNames {
    template = 'template',
    path = 'path',
}

export interface IOptions {
    template: string;
    path: string;
}

export const builder: CommandBuilder = (argv) =>
    argv
        .positional(OptionNames.path, {
            type: 'string',
            description: 'Target path',
            demandOption: false,
            default: 'react-embeddable',
        })
        .positional(OptionNames.template, {
            alias: 'T',
            type: 'string',
            demandOption: false,
            description: 'Use a template',
            default: 'typescript',
        });

export const handleCreate = (args: IOptions): Promise<void> => {
    console.log(`
        Creating new React Embeddable with 
            template: ${args.template}
                path: ${args.path}
`);
    return new Promise((res, rej) => {
        console.log('Loading...');

        ncp(
            `${_templatesPath}/${args.template}`,
            args.path,
            {
                limit: 16,
            },
            (err) => {
                if (err) {
                    console.error(err);
                    return rej();
                }
                console.log('Success!');

                console.log(`
               Now you can start your project with 
                 $ cd ${args.path}
                 $ npm i
                 $ npm run dev
        `);
                return res();
            }
        );
    });
};
