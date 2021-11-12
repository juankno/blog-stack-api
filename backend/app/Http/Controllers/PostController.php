<?php

namespace App\Http\Controllers;

use App\Http\Resources\Posts\PostResource;
use App\Http\Resources\Posts\PostCollection;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \App\Http\Resources\Posts\PostCollection
     */
    public function index()
    {
        return new PostCollection(Post::with('author')->paginate(10));
        // return new PostCollection();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \App\Http\Resources\Posts\PostResource
     */
    public function show(Post $post)
    {
        PostResource::withoutWrapping();
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->nocontent();
    }
}
