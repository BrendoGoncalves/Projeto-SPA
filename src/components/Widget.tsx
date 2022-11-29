import {ChatCircleDots} from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Windget(){
    
    return (<Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel><WidgetForm /></Popover.Panel>
                <Popover.Button className="bg-purple-700 rounded-full px-3 h-12 text-black flex items-center group border-4 border-transparent focus:border-purple-900 focus:outline-none">
                    <ChatCircleDots className="w-6 h-6" size="200" weight="bold" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-400">
                        <span className="2"></span>
                        Feddback
                        </span>
                </Popover.Button>
            </Popover>)
}