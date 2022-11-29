import {ChatCircleDots, Folder, GithubLogo, Info} from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Menu(){
    
    return (<>
                <div className="flex py-2 gap-2 w-full">
                <div className="bg-purple-700 rounded large py-2 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-400 hover:bg-purple-600 focus:border-purple-900 focus:outline-none">
                <a className="underline-offset-2" href="https://projeto-spa-sigma.vercel.app/"><Folder className="text-xl text-blue-400 w-10 h-10 focus:bg-blue-500" /></a>
                <a className="underline-offset-2" href="https://projeto-spa-sigma.vercel.app/"><h2 className="text-xl">Vercel</h2></a>
                </div>
                <div className="bg-purple-700 rounded large py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-600 hover:bg-purple-600 focus:border-blue-900 focus:outline-none">
                <a className="underline-offset-2" href="https://github.com/BrendoGoncalves/Projeto-SPA/tree/master"><GithubLogo className="text-xl text-blue-400 w-10 h-10 focus:bg-blue-500"/></a>
                <a className="underline-offset-2" href="https://github.com/BrendoGoncalves/Projeto-SPA/tree/master"><h2 className="text-xl">GitHub</h2></a>
                </div>
                <div className="bg-purple-700 rounded large py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-600 hover:bg-purple-600 focus:border-blue-900 focus:outline-none">
                <a className="underline-offset-2" href="https://spo.ifsp.edu.br/espaco-do-aluno"><Info className="text-xl text-blue-400 w-10 h-10 focus:bg-blue-500"/></a>
                <a className="underline-offset-2" href="https://spo.ifsp.edu.br/espaco-do-aluno"><h2 className="text-xl">Sobre</h2></a>
                </div>
                </div>

                <div className="flex py-1 w-full absolute my-80">
                <p className="relative pt-4 flex-1 flex flex-col items-center gap-2 text-purple-400">&copy; 2022</p>
                </div>
            </>)
}