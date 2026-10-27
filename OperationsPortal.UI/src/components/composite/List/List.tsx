import type { ReactNode } from "react";

interface ListProps {
    children: ReactNode,
}

const List = ({ children }: ListProps) => {
    return (
        <div className="list flex flex-col w-full bg-surface py-xs">
            {children}
        </div>
    );
};

export default List;