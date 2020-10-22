import React, { useState } from "react";
import { Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import useStyles from './styles';
import { Accordion, AccordionDetails, AccordionSummary } from './components';
import Chapter from "../../types/Chapter";

interface Props {
  chapter: Chapter;
  onClickTitle: (chapter: Chapter) => any;
}

function ExpandedChapter({ chapter, onClickTitle }: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const accordionTitleClick = () => {
    setExpanded(expanded => !expanded);
    onClickTitle(chapter);
  };

  return (
    <Accordion square expanded={expanded}>
      <AccordionSummary onClick={accordionTitleClick}>
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
