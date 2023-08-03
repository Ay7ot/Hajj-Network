export type GeneralAppContextType = {
    navshown: boolean;
    generalDispatch: React.Dispatch<GeneralAppActionType>
}

export type GeneralAppActionType = {
    type: string;
    payload?: {
        navShownPayload?: boolean
    }
} 