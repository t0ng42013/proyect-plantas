import { IPropsReactNode } from "../interface/ReactNode"




export const Header = ({ children,className }: IPropsReactNode) => {
  return (
    <header className={className}>
        {children}
    </header>
  )
}
