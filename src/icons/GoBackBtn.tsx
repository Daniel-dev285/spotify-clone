interface GoBackBtnProps {
    className: string | undefined
}


export function GoBackBtn({className}: GoBackBtnProps) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}