import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepProps{
    screenshot: string;
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}:FeedbackContentStepProps){
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        });
        onFeedbackSent();
    }
    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-black-900 hover:text-blue-300" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4"></ArrowLeft>
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea 
                className="min-w-[280px] w-full min-h-[112px] text-sm placeholder-gray-900 text-black-500 border-black-500 bg-transparent rounded-md focus:border-purple-900 focus:ring-purple-900 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-blue-900 scrollbar-track-transparent scrollbar-thin"
                placeholder="Conte com detalhes o que está acontencendo..."
                onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                    />
                    
                    <button
                    type="submit"
                    disabled={comment.length == 0}
                    className="p-2 bg-blue-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900 transition-colors disabled:opacity-50 disabled:hover:bg-blue-500">
                    Enviar Feedback
                    </button>

                </footer>
            </form>
        </>

    );
}