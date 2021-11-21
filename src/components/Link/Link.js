const Link = props => {
    return (
        <>
            {props.children}
        </>
        // <a href={props.href} to={props.to} onClick={(event) => event.preventDefault()}/>
    )
}

export default Link;