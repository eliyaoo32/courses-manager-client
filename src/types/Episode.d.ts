interface Episode {
    id: number;
    video_path: string;
    name: string;
    status: 'WATCH' | 'WATCHING' | 'TO_WATCH';
}

export default Episode;