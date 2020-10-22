import React from 'react';
import { Grid } from '@material-ui/core';
import ExpandedChapter from '../../components/ExpandedChapter';
import Chapter from '../../types/Chapter';

const _chapters: Array<Chapter> = [
    {
        id: 1,
        name: "#1 What is facebook?",
        episodes: [
            { id: 1, status: 'TO_WATCH', video_path: '', name: 'Why you use facebook?' },
            { id: 2, status: 'WATCHING', video_path: '', name: 'How to create a banner in facebook' },
            { id: 3, status: 'TO_WATCH', video_path: '', name: 'Now that you make millions' },
        ]
    },
    {
        id: 2,
        name: "#2 What is Instagram?",
        episodes: [
            { id: 1, status: 'TO_WATCH', video_path: '', name: 'Instagram for dummies' },
            { id: 2, status: 'WATCHING', video_path: '', name: 'Instagram for advanded' },
            { id: 3, status: 'TO_WATCH', video_path: '', name: 'Instagram is LIFE itself' },
        ]
    },
    {
        id: 3,
        name: "#3 What is Tiktok?",
        episodes: []
    },
];

function Course() {
    const chapters: Chapter[] = _chapters;
    const onClickChapterTitle = (chapter: Chapter) => {};

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={9}>
                Hey
            </Grid>
            <Grid item xs={12} md={3}>
                {chapters.map((chapter: Chapter) => (
                    <ExpandedChapter
                        chapter={chapter}
                        onClickTitle={onClickChapterTitle}
                    />
                ))}
            </Grid>
        </Grid>
    );
}

export default Course;
