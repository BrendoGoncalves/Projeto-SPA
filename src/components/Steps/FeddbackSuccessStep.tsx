import { Dog, DotsThreeCircleVertical, Star } from "phosphor-react";
import { CloseButton } from "../CloseButton";

interface FeedbackSuccesstStepProps{
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccesstStepProps){
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items items-center py-10 w-[304px]">
                <Dog className="w-6 h-6" size="200" weight="bold" />
                <span className="text-xl mt-2">Agradecemos o feedback!</span>
                <button type="button" onClick={onFeedbackRestartRequested} className="py-2 px-6 mt-6 bg-blue-600 rounded-md border-transparent text-sm leading-6 hover:bg-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400">
                    Enviar outro
                </button>
            </div>
        </>
    );
}