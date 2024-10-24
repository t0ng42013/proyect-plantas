

interface IProps {
    txt: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Buttons = ({ txt, className, onClick,disabled }: IProps) => {
    
    return (
        <button    
        disabled={disabled}    
            onClick={onClick}
            className={className}>{txt}</button>
    )
}
