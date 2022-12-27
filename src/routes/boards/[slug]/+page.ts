import { error } from '@sveltejs/kit';
import { data } from '../../../stores/data';
import { get } from 'svelte/store';

export function load({ params }: { params: any }) {
	const dummyData = get(data);

	const boardData = dummyData.boards.find((board) => board.slug == params.slug);

	if (boardData) return { ...boardData };

	throw error(404, 'Not Found');
}
