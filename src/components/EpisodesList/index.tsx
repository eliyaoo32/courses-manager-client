import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import useStyles from './styles';
import Episode from '../../types/Episode';

interface Props {
    episodes: Episode[];
}

function EpisodesList({episodes}: Props) {
    const classes = useStyles();

    return (
        <List className={classes.episodeLists}>
            {episodes.map(episode => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </List>
    );
}

function EpisodeItem({episode}: { episode: Episode }) {
    return (
        <ListItem button>
            <ListItemIcon>
                <PlayIcon />
            </ListItemIcon>
            <ListItemText primary={episode.name} />
        </ListItem>
    );
}

export default EpisodesList;