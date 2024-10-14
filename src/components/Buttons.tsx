

interface IProps {
    txt: string;
    className?: string;
    onClick?: () => void;
}

export const Buttons = ({ txt, className, onClick }: IProps) => {
    
    return (
        <button        
            onClick={onClick}
            className={className}>{txt}</button>
    )
}
