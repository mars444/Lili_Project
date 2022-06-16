import React, {useState} from 'react';

import { Sidebar } from 'primereact/sidebar';
import {Button} from "primereact/button";
import {TabMenu} from "primereact/tabmenu";
import {useHistory} from "react-router-dom";

const MobileMenu = ({mobileMenuItems, setVisibleMenu, visibleMenu}) => {
    return (
        <div>
            <Sidebar style={{width:'100%'}}  position="left" visible={visibleMenu} onHide={setVisibleMenu}>
                <TabMenu
                    model={mobileMenuItems}>
                </TabMenu>
            </Sidebar>
            {/*<Sidebar visible={visibleMenu} onHide={() => setVisibleMenu} icons={() => (*/}
            {/*    <React.Fragment>*/}
            {/*        <button className="p-sidebar-close p-link">*/}
            {/*            <span className="p-sidebar-close-icon pi pi-print"/>*/}
            {/*        </button>*/}
            {/*        <button className="p-sidebar-close p-link">*/}
            {/*            <span className="p-sidebar-close-icon pi pi-arrow-right"/>*/}
            {/*        </button>*/}
            {/*    </React.Fragment>*/}
            {/*)}>*/}
            {/*    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>*/}
            {/*    <Button type="button" onClick={(e) => setVisibleMenu} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />*/}
            {/*    <Button type="button" onClick={(e) => setVisibleMenu} label="Cancel" className="p-button-secondary"/>*/}
            {/*</Sidebar>*/}
        </div>
    );

};

export default MobileMenu;