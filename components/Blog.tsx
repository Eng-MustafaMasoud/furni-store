import Link from "next/link";
import { BlogData } from "@/utils/BlogData";
import Image from "next/image";



const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 my-24 py-16">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className=" text-2xl font-bold tracking-widest ">Recent Blog</h2>
        <Link href="/blog" className="capitalize underline text-sm">
          view All posts
        </Link>
      </div>
      <div className=" grid gap-4 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {
            BlogData.map((item, index) => (
                <Link href={`/blog/${encodeURIComponent(item.id)}`} className="flex text-sm flex-col gap-4 my-8" key={item.id}>
                    <Image src={item.image} alt={item.name} className="object-cover rounded-2xl"/>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>by <span className="font-bold">{item.name}</span> on <span className="font-bold">{item.date}</span></p>
                </Link>
            )
            )
        }
      </div>
    </section>
  );
};

export default Blog;
