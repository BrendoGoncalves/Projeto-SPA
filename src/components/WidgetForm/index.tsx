import { CloseButton } from "../CloseButton";
import instagramImageUrl from '../../assets/bug.png'
import twitterImageUrl from '../../assets/idea.png'
import whatsappImageUrl from '../../assets/more.png'
import { useState } from "react";
import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeddbackSuccessStep";

export const feedbackTypes = {
    BUG: {title: 'Problema',
        image:{
            source:instagramImageUrl, alt:'Instagram Imagem'
        }},
    IDEIA:{title:'Ideia',
        image:{
            source:twitterImageUrl, alt:'Twitter Imagem'
        }},
    OTHER:{title:'Outros',
        image:{
            source:whatsappImageUrl, alt:'WhatsApp Imagem'
        }},
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);
    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className="bg-purple-700 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />) :
                
                (
                <>
                    {!feedbackType ? (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />) : 
                    (<FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)} screenshot={""}                    />)}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Desenvolvimento WEB II <a className="underline-offset-2" href="https://spo.ifsp.edu.br/espaco-do-aluno">IFSP</a>
            </footer>
        </div>
    );
}