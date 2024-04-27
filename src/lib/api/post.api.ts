import { CONFIG } from "../../config";
import { Category } from "./category.api";
import { HttpApi } from "./http/http";
import { ApiListResp } from "./http/type";


export interface Tag {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    summary: string;
    content: string;
    created_at: string | Date;
    updated_at: string | Date;
    category: Category;
    tags: Tag[];
}

export interface PostFilter {
    search?: string;
    category_id?: number;
}


export class PostApi {
    static async getPosts(): Promise<ApiListResp<Post>> {
        return HttpApi.get<ApiListResp<Post>>(`${CONFIG.API_URL}/posts`).then(({ data }) => data);
    }
}
