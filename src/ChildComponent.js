const ChildComponent = ( props ) => {

    return (
        <div>
            This is a child component<br/><br/>
            { props.children}
        </div>
    )
}

export default ChildComponent