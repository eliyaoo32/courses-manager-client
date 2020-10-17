import React from 'react';
import { withStyles, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Chapter from '../../types/Chapter';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .10)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  

interface Props {
    expanded: boolean,
    chapter: Chapter
}

function ExpandedChapter({expanded, chapter}: Props) {
    return (
        <Accordion square expanded={expanded}>
            <AccordionSummary>
                <Typography>{chapter.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <PlayIcon />
                        </ListItemIcon>
                        <ListItemText primary="How to start" />
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    );
}

export default ExpandedChapter;