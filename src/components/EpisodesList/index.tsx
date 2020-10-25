import React from 'react';
import classNames from 'classnames';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import useStyles from './styles';
import Episode from '../../types/Episode';

function getEpisodeIcon(episode: Episode) {
    if(episode.status === 'TO_WATCH')
        return PlayCircleOutline;
    return PlayCircleOutline;
}

function EpisodeItem({episode}: { episode: Episode }) {
    const classes = useStyles();
    const episode_classname = classNames({
        [classes.watched]: episode.status === 'WATCHED',
        [classes.watching]: episode.status === 'WATCHING',
        [classes.to_watch]: episode.status === 'TO_WATCH',
    });
    const EpisodeIcon = getEpisodeIcon(episode);

    return (
        <ListItem button className={episode_classname}>
            <ListItemIcon>
                <EpisodeIcon className={episode_classname} />
            </ListItemIcon>
            <ListItemText primary={episode.name} />
        </ListItem>
    );
}

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

export default EpisodesList;