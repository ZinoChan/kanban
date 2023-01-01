import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { currentBoardId } from '../../../stores/selectedBoard';
import type { TData } from 'src/types/Data.types';

export const ssr = false;

export async function load({ params }: { params: { slug: string } }) {
	const dataImport = await import('../../../stores/data');

	const $data: TData | undefined = get(dataImport.data);

	const boardData = $data && Object.values($data.boards).find((board) => board.slug == params.slug);

	if (boardData) {
		currentBoardId.set(boardData.id);
		return { ...boardData };
	}
	throw error(404, 'Not Found');
}
