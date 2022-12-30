import { error } from '@sveltejs/kit';
import { data } from '../../../stores/data';
import { get } from 'svelte/store';
import { currentBoardId } from '../../../stores/selectedBoard';

export const ssr = false;

export function load({ params }: { params: { slug: string } }) {
	const $data = get(data);

	const boardData = $data && Object.values($data.boards).find((board) => board.slug == params.slug);

	if (boardData) {
		currentBoardId.set(boardData.id);
		return { ...boardData };
	}
	throw error(404, 'Not Found');
}
