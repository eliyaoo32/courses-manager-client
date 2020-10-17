import React from 'react';
import { Chip } from '@material-ui/core';

type CategoryTagProps = {
    name: string,
    selected?: boolean,
    small?: boolean
};

const CategoryTag = ({ name, selected, small }: CategoryTagProps) => (
    <Chip
        variant={!!selected ? 'default' : 'outlined'} color="primary"
        size={!!small ? 'small' : 'medium'} label={name}
    />
);

export default CategoryTag;
