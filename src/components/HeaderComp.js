import React from 'react'
import {Layout,Header,Navigation,Drawer,Content} from '../../node_modules/react-mdl'
function HeaderComp() {
    return (
        <div style={{ height: '55px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>Job Search</span></span>}>
                    <Navigation>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                        <a href="https://www.google.com">Link</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    )
}

export default HeaderComp
