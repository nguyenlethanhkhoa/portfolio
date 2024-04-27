import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostApi, PostFilter } from "../api/post.api";

export interface PostSlice {
    posts: Post[]
}

const initialState: PostSlice = {
    posts: []
};

export const getPosts = createAsyncThunk('post/list', async (filters: PostFilter) => {
    const resp = await PostApi.getPosts();
    
    return resp.result.items;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
    });
  },
});

export default postSlice.reducer;