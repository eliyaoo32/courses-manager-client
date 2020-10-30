import Episode from './Episode';

interface Chapter {
    id: number;
    name: string;
    episodes: Episode[]
}

export default Chapter;