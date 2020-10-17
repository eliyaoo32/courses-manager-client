import React from 'react';
import { Chip } from '@material-ui/core';
import Category from '../../types/Category';

type CategoryTagProps = {
    category: Category,
    selected?: boolean,
    small?: boolean,
    onClick?: () => any
};

function CategoryTag({ category, selected, small, onClick }: CategoryTagProps) {
    return (
        <Chip
            variant={!!selected ? 'default' : 'outlined'} color="primary"
            size={!!small ? 'small' : 'medium'} label={category.name} onClick={onClick}
        />
    );
}

export default CategoryTag;
