
interface IProps {
    txt: string;
    className?: string;
}

export const Buttons = ({ txt, className }: IProps) => {
    return (
        <button className={className}>{txt}</button>
    )
}
