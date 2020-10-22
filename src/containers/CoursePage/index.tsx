import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ExpandedChapter from '../../components/ExpandedChapter';
import Chapter from '../../types/Chapter';

const _chapters: Array<Chapter> = [
    {
        id: 1,
        name: "#1 What is facebook?"
    },
    {
        id: 2,
        name: "#2 What is Instagram?"
    },
    {
        id: 3,
        name: "#3 What is Tiktok?"
    },
];

function Course() {
    const [ expandedPage, setExpandedPage ] = useState<Chapter[]>([]);

    const onClickChapterTitle = (chapter: Chapter) => setExpandedPage((expanded) => [...expanded, chapter]);

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={9}>
                Hey
            </Grid>
            <Grid item xs={12} md={3}>
                {_chapters.map((chapter: Chapter) => (
                    <ExpandedChapter
                        onClickTitle={() => onClickChapterTitle(chapter)}
                        expanded={expandedPage.includes(chapter)}
                        chapter={chapter}
                    />
                ))}
            </Grid>
        </Grid>
    );
}

export default Course;