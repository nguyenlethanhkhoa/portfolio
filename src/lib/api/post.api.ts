import { CONFIG } from "../../config";
import { Category } from "./category.api";
import { HttpApi } from "./http/http";
import { ApiListResp, ApiResp } from "./http/type";


export interface Tag {
    id?: number;
    name: string;
}

export interface PostFormData {
    title: string;
    thumbnail: string;
    content: string;
    summary: string;
    categoryId: number | null;
    tags: Tag[];
}

export interface Post extends PostFormData {
    id: number;
    slug: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    category: Category | null;
}

export interface PostFilter {
    search?: string;
    category_id?: number;
}


export class PostApi {
    static async getPosts(): Promise<ApiListResp<Post>> {
        return HttpApi.get<ApiListResp<Post>>(`${CONFIG.API_URL}/posts`).then(({ data }) => data);
    }

    static async getPostBySlug(slug: string): Promise<ApiResp<Post>> {
        return HttpApi.get<ApiResp<Post>>(`${CONFIG.API_URL}/posts/${slug}`).then(({ data }) => data);
    }

    static async updatePost(postId: number, post: PostFormData): Promise<ApiResp<Post>> {
        return HttpApi.patch<ApiResp<Post>>(`${CONFIG.API_URL}/posts/${postId}`, post).then(({ data }) => data);
    }

    static async deletePost(postId: number): Promise<ApiResp<any>> {
        return HttpApi.delete<ApiResp<any>>(`${CONFIG.API_URL}/posts/${postId}`).then(({ data }) => data);
    }
}
