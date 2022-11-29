import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../WidgetForm/Loading";

interface ScreenshotButtonProps{
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        onScreenshotTook(base64image);
        console.log(base64image);
        setIsTakingScreenshot(false);
    }
    if(screenshot){
        return (
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-blue-800 hover:text-blue-200 transition-colors"
            onClick={() => onScreenshotTook(null)}
            style={{backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180, }}
            >
            <Trash weight="fill" />
            </button>);
    }
    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-blue-500 rounded-md border-transparent hover:bg-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900">
            
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-"/>}
            
        </button>
    );
}