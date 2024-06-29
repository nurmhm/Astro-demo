import { string } from "astro/zod";
import { defineCollection,z } from "astro:content";
const postsColloction = defineCollection ({
        schema:({image}) => z.object({
            author:z.string(),
            categories: z.string(),
            title: z.string(),
            image:image(),
            date:z.string(),
            featured: z.boolean(),
        })
})
export const collections = {
    posts: postsColloction,
}