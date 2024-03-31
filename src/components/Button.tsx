export type ButtonPropsType = {
    name: string
    disabled: boolean
    classes: string
    onClick: () => void
}

export const Button = ({name, disabled, classes, onClick}: ButtonPropsType) => {
    return (
        <button disabled={disabled} className={classes} onClick={onClick}>{name}</button>
    )
}
