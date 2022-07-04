import { createSocketStudioClient, SocketStudioProvider } from '@socket-studio/preact';
import AJPrimary from '@/components/AJPrimary';
import { Chat } from '@/components/Chat';
import { TagDrop } from '@/components/TagDrop';

export default function Coding() {
	const client = createSocketStudioClient('https://codingcat-twitch.onrender.com/graphql');
	return (
		<SocketStudioProvider client={client}>
			<main className="grid grid-cols-[1fr_180px] w-full">
				<section className="grid grid-rows-[1fr_8px_100px] h-screen overflow-hidden">
					<div />
					<div className="w-full h-2 bg-purple-900" />
					<div className="grid grid-cols-[1fr_100px] w-full bg-gradient-to-r to-purple-700 via-purple-500 from-pink-500">
						<div></div>
						<div className="p-1">
							<AJPrimary className="block w-20 h-20" />
						</div>
					</div>
				</section>
				<div className="grid grid-rows-[198px_1fr]">
					<div />
					<div className="relative overflow-hidden bg-purple-700 text-purple-50">
						<ul className="absolute bottom-0 left-0 pt-0 pb-2 pl-2 pr-5 m-0 list-none">
							{' '}
							<Chat chatMessageClass="p-[1px] grid text-xs gap-1 grid-row-[1fr]" />
						</ul>
					</div>
				</div>
			</main>
			<TagDrop />
		</SocketStudioProvider>
	);
}