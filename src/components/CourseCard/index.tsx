import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import CategoryTag from '../CategoryTag';
import Course from '../../types/Course';

interface Props {
    course: Course,
    onSelect: () => any
};

const CourseCard = ({ course, onSelect }: Props) => {
    return (
        <Card>
            <CardActionArea onClick={onSelect}>
                <CardMedia
                    component="img"
                    height="140"
                    image={course.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {course.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {course.categories.map((category) => (
                    <CategoryTag key={category.id} small category={category} />)
                )}
            </CardActions>
        </Card>
    );
};

export default CourseCard;
