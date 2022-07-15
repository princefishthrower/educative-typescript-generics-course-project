import * as React from "react";
import { IImagePost } from "../../interfaces/IImagePost";

export function ImagePostRenderer(props: IImagePost) {
  // rendered all properties of IBlogPost
  const { id, imageUrl, caption, comments, publishedAt } = props;

  const tryFormatDate = () => {
    try {
      return `${new Date(publishedAt).toLocaleDateString()} ${new Date(
        publishedAt
      ).toLocaleTimeString()}`;
    } catch (error) {
      return "Invalid Date";
    }
  };

  const formattedDate = tryFormatDate();

  return (
    <div className="col-12 p-3">
      <div className="card">
        <img src={imageUrl} class="card-img-top" alt={caption} />
        <div className="card-body">
          <h1 className="card-title">{caption}</h1>
          <ul class="list-group">
            {comments.map((comment) => {
              return <li class="list-group-item">{comment}</li>;
            })}
          </ul>
        </div>
        <div className="card-footer text-muted">
          <span className="float-start">#{id}</span>
          <span className="float-end">Published at: {formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
