import {MoonStars, Rocket, Star} from 'phosphor-react';

export function Stars(){
    
    return (<>
            <div>
                <Star className="w-7 h-7 bg-transparent text-blue-700 absolute bottom-10 left-40 hover:text-blue-400" size="200" weight="bold"/>
            </div>
            <div>
                <Star className="w-10 h-10 bg-transparent text-purple-900 absolute bottom-10 left-20 hover:text-purple-600" size="200" weight="bold"/>
            </div>
            <p className="mt-2 p-2 text-xl flex-1 flex flex-col items-center gap-2 text-pink-500">Single Page Application (SPA)</p>
    </>)
}