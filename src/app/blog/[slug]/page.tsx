// this component implements ISR which is good for dynamic data that doesn't change very often

export const revalidate = 500; // will update cache every 500s

interface Post {
	title: string;
	content: string;
	slug: string;
}

interface Props {
	params: { slug: string };
}               

// ? what does this exactly do? 

export async function generateStaticParams() {
	const posts: Post[] = await fetch("http://localhost:3000/api/content", {
		cache: "default",
	}).then((res) => res.json());

    return posts.map((post) =>({
        slug:post.slug
    }));


}

export default async function BlogPostPage({ params }: Props) {
	//de duplicated

	const posts: Post[] = await fetch("http://localhost:3000/api/content", {
		cache: "default",
	}).then((res) => res.json());

	const post = posts.find((post) => post.slug === params.slug)!;

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}
