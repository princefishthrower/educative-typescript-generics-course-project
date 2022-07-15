import * as React from "react";
import { useState } from "react";
import { blogPosts } from "./mock-data/blogPosts";
import { imagePosts } from "./mock-data/imagePosts";
import { BlogPostRenderer } from "./components/renderers/BlogPostRenderer";
import { ImagePostRenderer } from "./components/renderers/ImagePostRenderer";
import { SearchSortAndFilter } from "./components/SearchSortAndFilter";

export default function App() {
  const [showImagePosts, setShowImagePosts] = useState<boolean>(false);
  const buttonText = showImagePosts ? "Show blog posts" : "Show image posts";

  return (
    <>
      <div className="col-12">
        <button
          className="btn btn-primary"
          onClick={() => setShowImagePosts(!showImagePosts)}
        >
          {buttonText}
        </button>
      </div>
      {!showImagePosts ? (
        <SearchSortAndFilter
          title="Blog Posts:"
          data={blogPosts}
          renderItem={(blogPost) => (
            <BlogPostRenderer {...blogPost} key={blogPost.id} />
          )}
          searchLabel="Search for blog posts..."
          searchProperties={["title"]}
          shouldBeCaseSensitive={false}
          sortersLabel="Sort blog posts..."
          initialSortProperty="title"
          filtersLabel="Filter blog posts..."
          initialIsDescending={true}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      ) : (
        <SearchSortAndFilter
          title="Image Posts:"
          data={imagePosts}
          renderItem={(imagePost) => (
            <ImagePostRenderer
              {...imagePost}
              key={blogPost.id}
            />
          )}
          searchLabel="Search for image posts..."
          searchProperties={["caption"]} // TODO in next task
          shouldBeCaseSensitive={false}
          sortersLabel="Sort image posts..."
          initialSortProperty="caption"
          filtersLabel="Filter image posts..."
          initialIsDescending={true}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      )}
    </>
  );
}
