interface Episode {
    id: number;
    video_path: string;
    name: string;
    status: 'WATCHED' | 'WATCHING' | 'TO_WATCH';
}

export default Episode;