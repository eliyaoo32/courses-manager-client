import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import CategoryTag from '../CategoryTag';

type CourseCardProps = {
    courseName: string,
    courseDescription: string,
    imageUrl: string,
    categories: Array<string>
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
            <CategoryTag small name="Design" />
            <CategoryTag small name="E-Commerce" />
        </CardActions>
    </Card>
);

export default CourseCard;
