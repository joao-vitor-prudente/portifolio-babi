export interface PostData {
  postUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export function InstagramPost(props: PostData) {
  return (
    <a href={props.postUrl} target="_blank" rel="noopener noreferrer">
      <div className="aspect-square w-[calc(45vw)] overflow-hidden">
        <img
          className="aspect-square scale-110 object-cover transition duration-300 hover:scale-120 hover:brightness-50"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      </div>
    </a>
  );
}
