import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostApi, PostFilter, PostFormData } from "../api/post.api";

export interface PostSlice {
    posts: Post[];
    selectedPost: null | undefined | Post;
}

const initialState: PostSlice = {
    posts: [],
    selectedPost: null
};

export const getPosts = createAsyncThunk('post/list', async (filters: PostFilter) => {
    const resp = await PostApi.getPosts();
    
    return resp.result.items;
});

export const getPostBySlug = createAsyncThunk('post/selectBySlug', async (slug: string) => {
    const resp = await PostApi.getPostBySlug(slug);
    
    return resp.result;
});

export const clearSelectedPost = createAsyncThunk('post/clearSelected', async () => {
    return null;
});

export const updatePost = createAsyncThunk('post/update', async ({postId, postData}: {postId: number, postData: PostFormData}) => {
    const resp = await PostApi.updatePost(postId, postData);
    
    return resp.result;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
    });

    builder.addCase(getPostBySlug.fulfilled, (state, action) => {
        state.selectedPost = action.payload
    });

    builder.addCase(clearSelectedPost.fulfilled, (state, action) => {
        state.selectedPost = action.payload
    });
  },
});

export default postSlice.reducer;