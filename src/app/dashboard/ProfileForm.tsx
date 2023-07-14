'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
		<div className="bg-black p-4">
			<h2 className="text-xl font-bold mb-4 ">Edit Your Profile</h2>
			<form className="space-y-4" onSubmit={updateUser}>
				<label className="block text-white" htmlFor="name">
					Name
				</label>
				<input
					className="w-full px-4 py-2 border border-gray-400 rounded text-black"
					type="text"
					name="name"
					defaultValue={user?.name ?? ""}
				/>

				<label className="block text-white" htmlFor="bio">
					Bio
				</label>
				<textarea
					className="w-full px-4 py-2 border border-gray-400 rounded text-black"
					name="bio"
					cols={30}
					rows={10}
					defaultValue={user?.bio ?? ""}
				></textarea>

				<label className="block text-white" htmlFor="age">
					Age
				</label>
				<input
					className="w-full px-4 py-2 border border-gray-400 rounded text-black"
					type="text"
					name="age"
					defaultValue={user?.age ?? 0}
				/>

				<label className="block text-white" htmlFor="image">
					Profile Image URL
				</label>
				<input
					className="w-full px-4 py-2 border border-gray-400 rounded text-black"
					type="text"
					name="image"
					defaultValue={user?.image ?? ""}
				/>

				<button
					className="px-4 py-2 bg-gray-600 hover:bg-black text-white rounded"
					type="submit"
				>
					Save
				</button>
			</form>
		</div>
  );
}