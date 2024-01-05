import { Fragment } from "react";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import SidebarComponent from "./Sidebar";
import ContentComponent from "./Content";

const BaseComponent = () => {
    const content = {
        description: "Lorem ipsum. Updated",
        title: "Content Box"
    };

    return (
        // Empty element
        // <></>
        <Fragment>
            <HeaderComponent/>
            <div className="flexbox">
                <SidebarComponent/>
                {
                    /* Multiple props can be passed */
                    /* 
                    <ContentComponent 
                        title={content.title} 
                        content={content.description} 
                    /> 
                    */
                }
                {/* Props passing from parent to child */}
                <ContentComponent content={content} />
            </div>
            <FooterComponent/>
        </Fragment>
    )
}

export default BaseComponent;
