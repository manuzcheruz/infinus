import React from 'react';

import Toolbar from '../../components/Shared/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';

const layout = React.memo((props) => {
    return (
        <Aux>
            <Toolbar />
            <main style={{marginTop: '60px'}}>
                {props.children}
            </main>
        </Aux>
    );
})

export default layout;