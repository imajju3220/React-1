function Message () {
    const name = "Jack and John";
    if(name) {
        return <h1>{name}</h1>
    }    
    return <h1>Hello World</h1>
}

export default Message;