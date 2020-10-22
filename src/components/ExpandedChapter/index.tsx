import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Accordion, AccordionDetails, AccordionSummary } from './components';
import Chapter from "../../types/Chapter";
import EpisodesList from "../EpisodesList";

interface Props {
  chapter: Chapter;
  onClickTitle: (chapter: Chapter) => any;
}

function ExpandedChapter({ chapter, onClickTitle }: Props) {
  const [expanded, setExpanded] = useState<boolean>(true);

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
        <EpisodesList episodes={chapter.episodes} />
      </AccordionDetails>
    </Accordion>
  );
}

export default ExpandedChapter;
