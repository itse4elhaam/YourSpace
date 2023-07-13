import Link from "next/link";
import Image from "next/image";

interface Props {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
	return (
		<div className="border border-gray-300 rounded p-4">
			<Image
				src={image ?? "/mememan.webp"}
				alt={`${name}'s profile`}
				width={150}
				height={150}
			/>
			<div>
				<h3 className="text-xl font-bold">
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
}
