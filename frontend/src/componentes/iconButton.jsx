import React from 'react'
import If from '../componentes/if'
import LibraryIcon from '../componentes/libraryIcon'

export default props =>  (
    <If test={!props.hide}>
            <button className={'btn btn-'+props.style}
                onClick={props.onClick}>
                <LibraryIcon icon={props.icon} />
            </button>
    </If>
)