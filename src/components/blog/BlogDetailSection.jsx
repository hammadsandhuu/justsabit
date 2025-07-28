import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Author from "../../../public/assets/imgs/blog/detail/author.png";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetailSection = ({ blog }) => {
    const wordAnim = useRef();
    const wordAnim2 = useRef();
    useEffect(() => {
      animationWordCome(wordAnim.current);
      animationWordCome(wordAnim2.current);
    }, []);
  

  return (
    <section className="blog__detail pb-100">
      <div className="container g-0 line pt-140">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
            <div className="blog__detail-top">
              <h2
                className="blog__detail-date animation__word_come"
                ref={wordAnim}
              >
                {blog.category} <span>{blog.date}</span>
              </h2>
              <h3
                className="blog__detail-title animation__word_come"
                ref={wordAnim2}
              >
                {blog.title}
              </h3>
              <div className="blog__detail-metalist">
                <div className="blog__detail-meta">
                  <Image src={Author} alt="Author" />
                  <p>
                    Written by <span>{blog.author}</span>
                  </p>
                </div>
                <div className="blog__detail-meta">
                  <p>
                    Viewed <span>{blog.readTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="blog__detail-thumb">
              <Image
                src={blog.mainImage}
                alt="Blog Thumbnail"
                width={1000}
                height={600}
              />
            </div>
          </div>

          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
            <div className="blog__detail-content">
              {blog.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={index}>{block.text}</p>;
                  case "heading":
                    return <h2 key={index}>{block.text}</h2>;
                  case "image":
                    return (
                      <Image
                        key={index}
                        src={block.src}
                        alt={block.alt}
                        width={850}
                        height={500}
                        style={{ height: "auto" }}
                      />
                    );
                  case "list":
                    return (
                      <ul key={index}>
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            <div className="blog__detail-tags">
              <p className="sub-title-anim">
                tags:{" "}
                {blog.tags.map((tag, i) => (
                  <Link key={i} href={`/tag/${tag}`}>
                    {tag}
                    {i < blog.tags.length - 1 && ", "}
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
