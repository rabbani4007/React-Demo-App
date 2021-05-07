import React from "react";

interface Props {
  id: string;
  name: string;
  title: string;
  description: string;
  url?: string;
  imageUrl: string;
}
// text-overflow: ellipsis;
// overflow: hidden;
// white-space: nowrap;

export const NewsCard: React.FC<Props> = (props) => {
  const { id, name, title, description, url, imageUrl } = props;
  return (
    <div className="col" style={{ padding: "5px" }}>
      <div key={id} className="card">
        <img
          className="card-img-top"
          style={{ height: "200px", padding: "5px" }}
          src={imageUrl}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            // style={{
            //   textOverflow: "ellipsis",
            //   overflow: "hidden",
            //   whiteSpace: "nowrap",
            // }}
          >
            {description}
          </p>
        </div>

        <div className="card-body">
          <a href={url} className="card-link" target="_blank">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
