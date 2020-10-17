import React from 'react';
import { Chip } from '@material-ui/core';

type CategoryTagProps = {
    name: string,
    selected?: boolean,
    small?: boolean,
    onClick?: () => any
};

function CategoryTag({ name, selected, small, onClick }: CategoryTagProps) {
    return (
        <Chip
            variant={!!selected ? 'default' : 'outlined'} color="primary"
            size={!!small ? 'small' : 'medium'} label={name} onClick={onClick}
        />
    );
}

export default CategoryTag;
