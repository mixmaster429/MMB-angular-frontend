export class Blog {
    id: number;
    title: string;
    slug: string;
    author: string;
    date: string;
    intro: string;
    feed_image: string;
    reacted: {
        reaction_type: string;
        uuid: string;
    };
    comments: any[];
}