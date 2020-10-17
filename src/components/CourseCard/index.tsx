import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import CategoryTag from '../CategoryTag';
import Category from '../../types/Category';

type CourseCardProps = {
    courseName: string,
    courseDescription: string,
    imageUrl: string,
    categories: Array<Category>
};

const CourseCard = ({ courseName, courseDescription, imageUrl, categories }: CourseCardProps) => (
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {courseName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {courseDescription}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {categories.map((category) => (
                <CategoryTag key={category.id} small category={category} />)
            )}
        </CardActions>
    </Card>
);

export default CourseCard;
