import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPlus, faMinus, faEraser, faAdjust, faTrash, faCheck, faUndo, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faPlus,faMinus,faEraser,faAdjust,faAdjust,faTrash,faCheck,faUndo,faSearch)

export default props =>  (
    <FontAwesomeIcon icon={props.icon} />
)