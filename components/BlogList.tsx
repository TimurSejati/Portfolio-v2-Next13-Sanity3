import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16">
      {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className="flex flex-col cursor-pointer group">
            <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
                  {post.categories.map((category) => (
                    <div className="bg-[#f7ab0a] text-center text-black px-3 py-2 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 mt-5">
              <p className="text-lg font-bold underline">{post.title}</p>
              <p className="text-gray-500 line-clamp-2">{post.description}</p>
            </div>

            <p className="flex items-center mt-5 font-bold group-hover:underline">
              Read Post
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </p>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}

export default BlogList;
