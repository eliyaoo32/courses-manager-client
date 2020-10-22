import React from "react";
import { Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import useStyles from './styles';
import { Accordion, AccordionDetails, AccordionSummary } from './components';
import Chapter from "../../types/Chapter";

interface Props {
  expanded: boolean;
  chapter: Chapter;
  onClickTitle: () => any;
}

function ExpandedChapter({ expanded, chapter, onClickTitle }: Props) {
  const classes = useStyles();

  return (
    <Accordion square expanded={expanded}>
      <AccordionSummary onClick={onClickTitle}>
        <Typography>{chapter.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List className={classes.episodeLists}>
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
