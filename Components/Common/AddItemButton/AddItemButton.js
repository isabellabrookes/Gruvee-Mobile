import React from 'react'
import { IconButton } from '@GruveeUI'

const addButtonAsset = require('Gruvee/Assets/Buttons/AddButton/add_button.png')

const AddItemButton = ({ style, createAction, modalNavigateAction }) => {
    return (
        <IconButton
            icon={addButtonAsset}
            onPress={modalNavigateAction}
            style={style}
        />
    )
}

export default AddItemButton
