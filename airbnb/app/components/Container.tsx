interface ContainerProps { 
    children: React.ReactNode;  //now we can assign this props to this element 
}

//Now we can assign this props to this element
const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Container;