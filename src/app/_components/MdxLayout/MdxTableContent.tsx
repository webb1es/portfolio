export type MdxTableContentProps = {
    children: string;
};

export const MdxTableContent = (props: MdxTableContentProps) => {
    return (
        <div className="hidden lg:block relative right-0">
            <div className="flex flex-col text-sm">{props.children}</div>
        </div>
    );
};
