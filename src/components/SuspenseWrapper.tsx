import { Suspense, ComponentType } from 'react';

interface SuspenseWrapperProps {
    Component: ComponentType;
}

export const SuspenseWrapper = ({ Component }: SuspenseWrapperProps): JSX.Element => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    );
};