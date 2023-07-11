import { NextResponse } from "next/server";

// Dummy data
const posts = [
	{
		title: "Exploring the Outdoors",
		slug: "exploring-the-outdoors",
		content:
			"Embarking on an outdoor adventure is a wonderful way to connect with nature and experience the beauty of our surroundings. Whether it's hiking through lush forests, camping under starry skies, or paddling along tranquil lakes, the great outdoors offers endless opportunities for exploration and discovery.",
	},
	{
		title: "The Art of Cooking",
		slug: "the-art-of-cooking",
		content:
			"Cooking is an art form that brings people together and delights the senses. From the sizzle of a hot pan to the aroma of freshly baked bread, every step in the culinary process is a chance to create something delicious and memorable. Whether you're a seasoned chef or a novice in the kitchen, the world of cooking is full of endless possibilities.",
	},
	{
		title: "Unwinding with Books",
		slug: "unwinding-with-books",
		content:
			"Books have a magical ability to transport us to different worlds, introduce us to fascinating characters, and ignite our imagination. Whether it's a gripping mystery, a heartwarming romance, or a thought-provoking non-fiction book, getting lost in the pages of a good book is a delightful way to unwind and escape from the demands of everyday life.",
	},
	{
		title: "Mastering the Guitar",
		slug: "mastering-the-guitar",
		content:
			"Playing the guitar is a journey of self-expression and musical discovery. From learning basic chords to mastering intricate melodies, every note struck on the guitar creates a beautiful harmony. Whether you dream of strumming along to your favorite songs or composing your own music, the guitar is a versatile instrument that holds endless possibilities.",
	},
	{
		title: "Capturing Life Through Photography",
		slug: "capturing-life-through-photography",
		content:
			"Photography allows us to freeze moments in time, capturing the beauty of the world around us. Whether it's the vibrant colors of a sunset, the candid expressions of loved ones, or the intricate details of nature, a photograph has the power to tell a story and evoke emotions. With a camera in hand, we become storytellers, documenting the fleeting moments that make life extraordinary.",
	},
	{
		title: "The Joys of Gardening",
		slug: "the-joys-of-gardening",
		content:
			"Gardening is a wonderful way to connect with nature, cultivate beauty, and nourish our souls. From planting seeds and nurturing seedlings to witnessing the vibrant blooms and bountiful harvests, every step in the gardening process is filled with joy and fulfillment. Whether you have a sprawling backyard or a small balcony, tending to plants can bring a sense of serenity and a deep appreciation for the wonders of the natural world.",
	},
	{
		title: "Embracing Mindfulness through Meditation",
		slug: "embracing-mindfulness-through-meditation",
		content:
			"In today's fast-paced world, finding moments of stillness and inner peace is essential for our well-being. Meditation provides a pathway to calm the mind, release stress, and cultivate mindfulness. Whether it's through focused breathing, guided visualization, or silent contemplation, incorporating meditation into our daily lives allows us to connect with our inner selves and navigate the world with greater clarity and compassion.",
	},
	{
		title: "Discovering the Wonders of Astronomy",
		slug: "discovering-the-wonders-of-astronomy",
		content:
			"The vast expanse of the universe has fascinated humans for centuries. Astronomy, the study of celestial objects and phenomena, invites us to explore the mysteries of space and time. From observing distant galaxies and marveling at the beauty of constellations to pondering the origins of the universe, delving into the world of astronomy fills us with awe and expands our understanding of the cosmos.",
	},
	{
		title: "Thriving in a Digital World",
		slug: "thriving-in-a-digital-world",
		content:
			"The digital age has revolutionized the way we live, work, and connect with others. Embracing technology opens up a world of possibilities, from creative pursuits and entrepreneurial ventures to global communication and access to information. Navigating the digital landscape with curiosity, adaptability, and a growth mindset allows us to thrive in an ever-evolving world.",
	},
	{
		title: "The Power of Yoga and Mindfulness",
		slug: "the-power-of-yoga-and-mindfulness",
		content:
			"Yoga and mindfulness practices offer a holistic approach to wellness, nurturing the mind, body, and spirit. Through gentle movement, deep breathing, and focused awareness, yoga invites us to cultivate balance, strength, and inner peace. By embracing these practices, we tap into our inner wisdom, connect with the present moment, and nurture a sense of well-being that radiates into all aspects of our lives.",
	},
];

export async function GET(){
    return NextResponse.json(posts);
} 
