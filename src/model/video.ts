import { Author } from "./author";

export interface Video {
    id: string;
    title: string;
    description?: string;
    thumbnailUrl: string;
    videoUrl: string;
    author: Author;
    viewCount: number;
}
