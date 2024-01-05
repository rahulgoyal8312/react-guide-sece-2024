
// This component is receiving props from parent component
const ContentComponent = ({ content, ...rest }) => {

    console.log(content, rest);
    return (
        <div className="content-box">
            <h3>{content.title}</h3>
            {content.description}
        </div>
    )
}

export default ContentComponent;