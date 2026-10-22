import { InstagramPost, type PostData } from "@/components/instagram-post";

const posts: PostData[] = [
  {
    postUrl: "https://www.instagram.com/p/DZp_zKxEcRl/",
    imageUrl:
      "https://instagram.fbsb6-1.fna.fbcdn.net/v/t51.82787-15/725626843_17890483140542154_43198343995303829_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ig_cache_key=MzkyMDk0NDE3NzM1MzE5MjEwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjE2MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=6bXy5ECHuGgQ7kNvwF2MXmT&_nc_oc=AdrfXoo87LtbkfxLvjfpZg2hZj164kaNdF5In5GvZ9o05xaC_5s05jsvFOozGDw7CYiLRhWkaYrqUUZSgMTqa5cq&_nc_zt=23&_nc_ht=instagram.fbsb6-1.fna&_nc_gid=10VvzqAlKCiKBu0hm-x_mQ&_nc_ss=7b289&oh=00_AQONfg2BKo4M9jxEgWqrlO8wEJgpTbqOSm6sfY68Yj3ktQ&oe=6ADEFE9B",
    imageAlt: "Post ensaio Isabela e Eduardo",
  },
  {
    postUrl: "https://www.instagram.com/p/DP_uDRXjgGF/",
    imageUrl:
      "https://instagram.fbsb6-1.fna.fbcdn.net/v/t51.82787-15/566471983_17855713200542154_6185100563234530798_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ig_cache_key=Mzc0NjkxNTkzMDY2NTMwNTE2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_e9Wah5m1wAQ7kNvwHT0oUO&_nc_oc=AdpEQZ9GF_H04bLoz5UsZft0PV0HlD-LYSJsXfhzlzw8OnStZSzWPSboOAPYomYKXb-8EA3pkxxH9qmzP30MJKpu&_nc_zt=23&_nc_ht=instagram.fbsb6-1.fna&_nc_gid=UJz5S3BHBZ0acSGaLpF3og&_nc_ss=7b689&oh=00_AQM-Gk9uIth7zEZyUhfvx7LlVCv6G8ZVH63pNfg6nEylRA&oe=6ADF23A7",
    imageAlt: "Post ensaio Giovanna e Renato",
  },
  {
    postUrl: "https://www.instagram.com/p/DMxuR9TOBCb/",
    imageUrl:
      "https://instagram.fbsb6-1.fna.fbcdn.net/v/t51.82787-15/525298984_17843504922542154_40995244799189961_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=MzY4ODkzMzExMzk4NDQ1NDgxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=lrZsP0x6DqsQ7kNvwEdTO_R&_nc_oc=AdqS5MSJxEb80g1c8YnRvA7Pvk39PGt665jEnTYZPGS9YTTeOmzA-Km6bDthMJPIwZFQUB6xpqStXP488hHhk4z4&_nc_zt=23&_nc_ht=instagram.fbsb6-1.fna&_nc_gid=gfTEceRseNtEMP265YWmfw&_nc_ss=7b689&oh=00_AQNjIcSAyvNRQ6fU-I0g_HVUyStjC5vhIzjt0pAbbtJvOw&oe=6ADF295C",
    imageAlt: "Post eu",
  },
];

export function InstagramFeatured() {
  return (
    <div>
      <ul className="flex overflow-x-scroll">
        {posts.map((post) => (
          <li
            key={post.postUrl}
            className="first:[&>a>div]:rounded-l-md last:[&>a>div]:rounded-r-md"
          >
            <InstagramPost {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
